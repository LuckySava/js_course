import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  render() {
    return (
      <div
        style={{ textDecoration: this.props.completed ? 'line-through' : '' }}
        className="newInput"
      >
        { this.props.value }
        <div className="markText" onClick={this.props.onToggle}></div>
        <button className="delItem" onClick={this.props.deleteItem}>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func,
};

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = { list: [] };
  }

  onItemAdd(e) {
    if (e.keyCode === 13 && e.target.value.length) {
      this.setState({
        list: this.state.list.concat({
          value: e.target.value,
          id: Math.random(),
          completed: false,
        }),
      });

      e.target.value = '';
    }
  }

  onCompletedToggle(id) {
    const result = this.state.list.filter(item => item.id === id)[0];

    if (result) {
      result.completed = !result.completed;

      this.setState({ list: this.state.list });
    }
  }

  onItemDelete(id) {
    
    this.setState({
        list: this.state.list.filter(item => item.id !== id)
    })
  }

  onItemAllChecked(e) {
      let stateList = this.state.list;
      stateList.forEach((key) => {
          key.completed = e.target.checked
      })
      this.setState({
          list: stateList
      })
  }

  onItemRemoveChecked() {
    this.setState({
        list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="header">
        <h1>Sava's todos </h1>
        <input className="main_input" type="text" placeholder="What need to be done" onKeyDown={this.onItemAdd.bind(this)} />
        {
          this.state.list.map((item) => (
            <TodoItem
              id={item.id}
              value={item.value}
              completed={item.completed}
              onToggle={this.onCompletedToggle.bind(this, item.id)}
              key={item.id}
              deleteItem = {this.onItemDelete.bind(this, item.id)}

            />
          ))
        }
          <p className="totalElem">{this.state.list.filter(item => !item.completed).length} items left</p> 
          <input className="checkAllitem" type="checkbox" onClick={this.onItemAllChecked.bind(this)}></input>
          {
              this.state.list.filter(elem => elem.completed).length ? 
          <div className="delAll" onClick={this.onItemRemoveChecked.bind(this)}>Clear completed</div> : null
          }
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root'),
)