import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      content: ''
    }

    this.handleUsernammeChange = this.handleUsernammeChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this)
  }

  componentDidMount() {
    this._loadUsername()
    this.textarea.focus()
  }

  _saveUsername(username) {
    localStorage.setItem('username', username)
  }

  _loadUsername() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({username})
    }
  }

  handleUsernameBlur(event) {
    this._saveUsername(event.target.value)
  }

  handleUsernammeChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      const createdTime = +new Date()
      this.props.onSubmit({username, content, createdTime})
    }
    this.setState({content: ''})
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
              value={this.state.username}
              onBlur={this.handleUsernameBlur}
              onChange={this.handleUsernammeChange} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentInput;