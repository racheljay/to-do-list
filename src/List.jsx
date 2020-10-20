import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
    
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        this.setState({
            value: ""
        });

        
        this.props.addFunction(this.state.value);
        e.preventDefault();
        console.log(this.state.value)
        // console.log(this.currList)
        // window.localStorage.setItem(this.state.value, "active")
        
    }

    changeStatus(index) {
        if(this.props.currList[index].status === "active") {
            this.props.currList[index].status = "completed"
            //console.log(index + " is active")
        }
        // console.log(this.props.currList[index].status)
    

            // this.props.currList.map((item, index) => item.status) = "done" 
        
        //console.log(this.props.currList.map((item, index) => item.status))
    }

    deleteItem() {

    }


    render() {
        return (
            <div className="col-6 mx-auto">
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
                    {/* <div>{this.props.title}</div> */}
                    {this.props.currList.map((item, index) => (
                        <li key={index}>
                            <button
                            className="btn btn-dark btn-sm"
                            onClick={() => this.changeStatus(index)}
                            >
                                -
                            </button>
                    {" "}{item.name}{" "}{"Status: "}{item.status}{" "}
                            <button
                            className="btn btn-danger btn-sm"
                            onClick={() => this.deleteItem(index)}
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