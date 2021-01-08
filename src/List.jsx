import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faCheckCircle, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faSquare } from '@fortawesome/free-regular-svg-icons'

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
    this.state.value && this.props.addFunction(this.state.value);
    this.setState({
      value: ""
    });

    e.preventDefault();

  }

  changeStatus(id) {

    let newarr = this.props.currList.map((item, index) => {
      if (item.id === id) {// && item.status === "active") {

        if (item.status === "active") {
          item.status = "completed"
          item.checkbox = "checked"

        } else {
          item.status = "active"
          item.checkbox = ""
        }
      }
      return item
    })

    this.props.updateTodo(newarr)
  }

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

        <form onSubmit={this.handleSubmit} className="input-group mt-3">


          <div class="input-group-prepend">
            <button class="btn btn-outline-info" type="submit"><FontAwesomeIcon icon={faFeatherAlt} /></button>
          </div>
  
            <input
              className="form-control"
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.handleChange}
              aria-label="" aria-describedby="basic-addon1"
            />
            
        </form>

        <ul className="list-group">
          {/* <h1 className=" m-2">{this.props.title}</h1> */}
          {this.props.currList.filter((item) => {
            if (this.props.tab === "all") {
              return item;
            }
            else if (this.props.tab === "active" && item.status === "active") {
              return item;
            }
            else if (this.props.tab === "completed" && item.status === "completed") {
              return item;
            }
          }).map((item, index) => (



            <li key={index}
              className={"list-group-item d-flex justify-content-between align-items-center list-group-item-" + (item.status === "active" ? 'dark' : 'light')}
            >
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => this.changeStatus(item.id)}
              >
                {item.status === "active" ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faCheck} />}
              </button>
              {item.name}
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => this.deleteItem(item.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

export default List;