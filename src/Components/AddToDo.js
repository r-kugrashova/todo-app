import React, {Component} from 'react';

class AddToDo extends Component {

    constructor(){
        super()
        this.state={
            text:"",
            id: "",
            done:"",
        }};

    componentDidMount(){
        this.handleChange=this.handleChange.bind(this)
    };

    handleChange = (e) => {
        if (e.key === 'Enter') {
            console.log('HERE');
            this.props.createTodo(e.target.value);
            e.target.value = '';
        }
    };

    render() {
        return(
            <div>
                <input type="text" onKeyDown={this.handleChange}/>
                {/*<button onClick={this.onClick}>Add todo</button>*/}
            </div>
        )
    }
}
export default AddToDo
