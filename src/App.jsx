import React from 'react';
import List from './List';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: "all",
      todos: [],
      // completed: [],
      // active: []
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.activeAll = this.activeAll.bind(this);
    // this.completeAll = this.completeAll.bind(this);
    // this.activeAll = this.completeAll.bind(this);
    // this.deleteCompleted = this.deleteCompleted.bind(this);
    // this.filterActive = this.filterActive.bind(this);
  }

  handleButtonClick(buttonName) {
    this.setState({
      buttonClicked: buttonName
    });
    // console.log(buttonName)
    // if (buttonName === 'active') {
    //   this.filterActive()
    // }
    // if (buttonName === 'completed') {
    //   this.filterComplete()
    //}
  }

  addTodo(name) {
    let obj = {
      name: name,
      status: "active",
      id: Date.now()
    }
    this.setState({
      todos: this.state.todos.concat(obj)
    })
    // console.log(this.state.todos)
    // window.localStorage.setItem(this.state.todos[0].name, this.state.todos[0].status)
  }

  updateTodo(arr) {
    this.setState({
      todos: arr
    })
  }

  cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // completeAll() {
  //   this.setState({
  //     todos: this.state.todos.map((item, index) => {
  //       item.status = "completed"
  //     })

  //   })
  //   console.log(this.state.todos)
  // }
    
  //     console.log()
  //  })
    
  //   console.log(update)
  //   console.log(this.state.todos)
  

  activeAll() {
    let update = this.state.todos.map((item, index) => {
      item.status = "active"
      return item
    })
    console.log(this.state.todos)
    this.updateTodo(update)
  }

  // deleteCompleted() {
    
  // }


  
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
    // console.log(savedTodo)
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

    // let tabChoice = <div />;

    // if (this.state.buttonClicked === "all") {
    //   tabChoice = (
    //     <List
    //       placeholder="What's next?"
    //       currList={this.state.todos}
    //       addFunction={this.addTodo}
    //       updateTodo={this.updateTodo}
    //       title="All"
    //     />
    //   );
    // }

    // if (this.state.buttonClicked === "active") {
    //   tabChoice = (

    //     <List
    //       placeholder="What's next?"
    //       currList={this.state.active}
    //       addFunction={this.addTodo}
    //       updateTodo={this.updateTodo}
    //       title="Active"
    //     />

    //     // <div className="container">
    //     //   <h3>Active</h3>
    //     //   <ul>
    //     //     {this.state.active.map((item, index) => (
    //     //       <li key={index}>
    //     //         {item.name}
    //     //       </li>
    //     //     ))}
    //     //   </ul>
    //     // </div>
    //   )
    // }

    // if (this.state.buttonClicked === "completed") {
    //   tabChoice = (
    //     <List
    //       placeholder="What's next?"
    //       currList={this.state.todos}
    //       addFunction={this.addTodo}
    //       updateTodo={this.updateTodo}
    //       title="Completed"
    //     />
    //     // <div className="container">
    //     //   <h3>Completed</h3>
    //     //   <ul>
    //     //     {this.state.completed.map((item, index) => (
    //     //       <li key={index}>
    //     //         {item.name}
    //     //       </li>
    //     //     ))}
    //     //   </ul>
    //     // </div>
    //   )
    // }



    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h1 className="d-flex flex-justify-center">To Do</h1>
            <h4>Todos remaining: {this.state.todos.length}</h4>
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
       
        <List
          cap={this.cap}
          placeholder="What's next?"
          currList={this.state.todos}
          addFunction={this.addTodo}
          updateTodo={this.updateTodo}
          tab={this.state.buttonClicked}
          title={this.cap(this.state.buttonClicked)}
          active={this.activeAll}
        />
      </div>
    )
  }

}

export default App;
