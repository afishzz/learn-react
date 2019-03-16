import React, { Fragment, Component } from 'react';
import TodoItem from './TodoItem';

class TodiList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list});
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return <TodoItem delete={this.handleDelete} key={index} content={item} index={index}/>
      })
    );
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleInput}/>
        <button onClick={this.handleAdd}>add</button> 
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}

export default TodiList;