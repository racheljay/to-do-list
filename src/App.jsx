import React from 'react';
import List from './List';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      buttonClicked: "",
      todos: [],
    };


    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleButtonClick(buttonName) {
    this.setState({
      buttonClicked: buttonName
    });
    console.log(buttonName)

  }

  addTodo(name) {

    let obj = {
      name: name,
      status: "active",
    }
    this.setState({
      todos: this.state.todos.concat(obj)
      
    })
    console.log(this.state.todos)
    // window.localStorage.setItem(this.state.todos[0].name, this.state.todos[0].status)

  }

  componentDidMount() {
    console.log('in the component did mount method')
    console.log("Number of todos: " + this.state.todos.length)
    let data = window.localStorage.getItem('to');
    //unstring this data and set it to todo status
    console.log(data)
    // let savedTodo = window.localStorage.getItem('active')
    // console.log(savedTodo)
  }

  componentDidUpdate() {
    console.log('in the component did update method')
    console.log('Number of todos: ' + this.state.todos.length)
    // this.state.todos.map((item, index) => {
    //   window.localStorage.setItem(this.state.todos.index.name, this.state.todos.index.status)

    // })
    window.localStorage.setItem("to", JSON.stringify(this.state.todos))
  }


  render() {

    let tabChoice = <div />;

    // if (this.state.buttonClicked === "all") {
      tabChoice = (
        <List
        placeholder = "What's next?"
        currList = {this.state.todos}
        addFunction = {this.addTodo}
        title = "All"
        />
      );
    //}

    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h3 className="d-flex flex-justify-center">To Do</h3>
          </div>
        </div>

        <nav className="d-flex flex-justify-center">
          <div className="UnderlineNav-body pt-6">
            <button
              className="btn btn-warning"
              onClick={() => this.handleButtonClick("all")}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              onClick={() => this.handleButtonClick("active")}
            >
              Active
            </button>
            <button
              className="btn btn-warning"
              onClick={() => this.handleButtonClick("completed")}
            >
              Completed
            </button>
          </div>
        </nav>
        {tabChoice}
      </div>
    )
  }

}

export default App;
