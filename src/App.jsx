import React from 'react';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons'

// import './App.css';

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

    // this.filterActive = this.filterActive.bind(this);
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


  // filterActive() {
  //   this.setState({
  //     active: this.state.todos.filter(item => item.status === "active")
  //   })
  // console.log(this.state.active)

  //}

  // filterComplete() {
  //   this.setState({
  //     completed: this.state.todos.filter(item => item.status === "completed")
  //   })
  // console.log(this.state.active)
  // }
  componentDidMount() {
    // console.log('in the component did mount method')
    // console.log("Number of todos: " + this.state.todos.length)
    let data = window.localStorage.getItem('to');
    //unstring this data and set it to todo status
    // console.log(JSON.parse(data))
    if (data) {
      this.setState({
        todos: JSON.parse(data)
      })
    }
    // let savedTodo = window.localStorage.getItem('active')
    console.log(this.state.todos)
  }

  componentDidUpdate() {
    // console.log('in the component did update method')
    // console.log('Number of todos: ' + this.state.todos.length)
    // this.state.todos.map((item, index) => {
    //   window.localStorage.setItem(this.state.todos.index.name, this.state.todos.index.status)

    // })
    window.localStorage.setItem("to", JSON.stringify(this.state.todos))
  }




  render() {





    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h1 className="d-flex flex-justify-center">To Do</h1>
            <h4>Todos remaining: {this.state.todos.length}</h4>
          </div>
        </div>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className={"nav-link " + (this.state.buttonClicked === "all" ? 'active' : '')}
              onClick={() => this.handleButtonClick("all")}
            >All</a>
          </li>
          <li className="nav-item">
            <a className={"nav-link " + (this.state.buttonClicked === "active" ? 'active' : '')}
              onClick={() => this.handleButtonClick("active")}
            >Active</a>
          </li>
          <li className="nav-item">
            <a className={"nav-link " + (this.state.buttonClicked === "completed" ? 'active' : '')}
              onClick={() => this.handleButtonClick("completed")}
            >Completed</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
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

        </ul>



        <List
          cap={this.cap}
          placeholder="What's next?"
          currList={this.state.todos}
          addFunction={this.addTodo}
          updateTodo={this.updateTodo}
          tab={this.state.buttonClicked}
          title={this.cap(this.state.buttonClicked)}
        // active={this.activeAll}
        />
      </div>
    )
  }

}

export default App;
