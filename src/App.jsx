import React from 'react';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: "all",
      todos: [],

    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

    this.completeAll = this.completeAll.bind(this);
    this.activeAll = this.activeAll.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);

  }

  handleButtonClick(buttonName) {
    this.setState({
      buttonClicked: buttonName
    });

  }

  addTodo(name) {
    let obj = {
      name: name,
      status: "active",
      id: Date.now(),
    }
    this.setState({
      todos: this.state.todos.concat(obj)
    })

  }

  updateTodo(arr) {
    this.setState({
      todos: arr
    })
  }

  cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  completeAll() {
    let newarr = this.state.todos.map((item, index) => {
      item.status = "completed"
      return item
    })
    this.updateTodo(newarr)
  }

  activeAll() {
    let newarr = this.state.todos.map((item, index) => {
      item.status = "active"
      return item
    })
    this.updateTodo(newarr)
  }

  deleteCompleted() {
    let newarr = this.state.todos.filter(item => {
      if (item.status === "active") {
        return item
      }
    })
    this.updateTodo(newarr)
  }
 
  componentDidMount() {
    
    let data = window.localStorage.getItem('to');

    if (data) {
      this.setState({
        todos: JSON.parse(data)
      })
    }
    console.log(this.state.todos)
  }

  componentDidUpdate() {
    
    window.localStorage.setItem("to", JSON.stringify(this.state.todos))
  }

  render() {

    return (
      <div className="container App">
        
            <h1 className="text-center">To Do List</h1>
            <h4 className="text-center">Items: {this.state.todos.length}</h4>
     

        <ul className="nav nav-tabs ">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-info" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faClipboardList} />
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item text-info"
                onClick={this.completeAll}
              >Complete All</a>
              <div className="dropdown-divider "></div>
              <a className="dropdown-item text-warning"
                onClick={this.activeAll}
              >Activate All</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-danger"
                onClick={this.deleteCompleted}
              >Remove Completed</a>

            </div>
          </li>
          <li className="nav-item">
            <a className={"nav-link " + (this.state.buttonClicked === "all" ? 'active' : '') + " text-info"}
              onClick={() => this.handleButtonClick("all")}
            >All</a>
          </li>
          <li className="nav-item">
            <a className={"nav-link " + (this.state.buttonClicked === "active" ? 'active' : '') + " text-info"}
              onClick={() => this.handleButtonClick("active")}
            >Active</a>
          </li>
          <li className="nav-item">
            <a className={"nav-link " + (this.state.buttonClicked === "completed" ? 'active' : '') + " text-info"}
              onClick={() => this.handleButtonClick("completed")}
            >Completed</a>
          </li>

        </ul>

        <List
          cap={this.cap}
          placeholder="What's next?"
          currList={this.state.todos}
          addFunction={this.addTodo}
          updateTodo={this.updateTodo}
          tab={this.state.buttonClicked}
          title={this.cap(this.state.buttonClicked)}
        />
      </div>
    )
  }

}

export default App;
