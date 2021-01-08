import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeAll = this.completeAll.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
    this.activeAll = this.activeAll.bind(this);

  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.props.addFunction(this.state.value);
    this.setState({
      value: ""
    });

    e.preventDefault();
    
  }

  changeStatus(id) {
    // let double = this.props.currList

    let newarr = this.props.currList.map((item, index) => {
      if (item.id === id) {// && item.status === "active") {

        if (item.status === "active") {
          item.status = "completed"

        } else {
          item.status = "active"
        }
      }
      return item
    })
    // if (double[index].status === "active") {
    //     double[index].status = "completed"
    //     //console.log(index + " is active")
    // } else {
    //     double[index].status = "active"
    // }
    this.props.updateTodo(newarr)
  }

  //WHY DOES THIS WORK IN LIST BUT NOT IN APP !#*@#&&@*
  completeAll() {
    let newarr = this.props.currList.map((item, index) => {
      item.status = "completed"
      return item
    })
    this.props.updateTodo(newarr)
  }

  activeAll() {
    let newarr = this.props.currList.map((item, index) => {
      item.status = "active"
      return item
    })
    this.props.updateTodo(newarr)
  }

  deleteCompleted() {
    let newarr = this.props.currList.filter(item => {
      if (item.status === "active") {
        return item
      }
    })
    this.props.updateTodo(newarr)
  }

  deleteItem(id) {
    // console.log(id)
    let newarr = this.props.currList.filter(item => {
      if (item.id !== id) {
        return item
      }
    })

    this.props.updateTodo(newarr)
  }


  render() {
    return (

      <div className="col-12 mx-auto">
       
        <br />
        <p className="h2">{this.props.title}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="form-control input-sm"
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input className="btn btn-sm" type="submit" value="Submit" />
          </label>
        </form>



        <ul>
          <div>{this.props.title}</div>
          {this.props.currList.filter((item) => {
            // console.log(this.props.tab)
            if (this.props.tab === "all") {
              // console.log("all", item)
              return item;
            }
            else if (this.props.tab === "active" && item.status === "active") {
              // console.log("active", item)
              return item;
            }
            else if (this.props.tab === "completed" && item.status === "completed") {
              // console.log("completed", item)
              return item;
            }
          }).map((item, index) => (
            <li key={index}>
              <button
                className="btn btn-dark btn-sm"
                onClick={() => this.changeStatus(item.id)}
              >
                -
                            </button>
              {" "}{item.name}{" "}{"Status: "}{item.status}{" "}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteItem(item.id)}
              >
                -
                            </button>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

export default List;