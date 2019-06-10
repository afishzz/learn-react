import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    addComment: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      username: localStorage.getItem('username') || ''
    }
  }

  handleSubmit(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.addComment) {
      this.props.addComment(comment)
    }
  }

  handleUserInputBlur(username) {
    localStorage.setItem('username', username)
  }

  render() {
    return (
      <CommentInput
        username={this.state.username}
        onSubmit={this.handleSubmit.bind(this)}
        onUsernameInputBlur={this.handleUserInputBlur.bind(this)} />
    );
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)