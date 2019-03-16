import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    const {index} = this.props;
    this.props.delete(index);
  }

  render() {
    const {content} = this.props;
    return (
      <li onClick={this.onDismiss}>{content}</li>
    );
  }
}

export default TodoItem;