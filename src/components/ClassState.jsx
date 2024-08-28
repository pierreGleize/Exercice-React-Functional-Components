import { Component } from "react";

class ClassState extends Component{

    state = {
        counter: 0
    }

    addOne = () =>{
        this.setState((prevState) => {
            return {
                counter: prevState.counter +1 
            }
        })
    }

    render(){
        return(
            <div>
                <p>Class State: {this.state.counter}</p>
                <button onClick={this.addOne}>Ingrémenter avec class State</button>
            </div>
        )
    }
}

export default ClassState;