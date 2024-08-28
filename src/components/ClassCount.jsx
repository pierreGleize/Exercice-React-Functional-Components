import { Component } from "react";

class ClassCount extends Component{

    state = {
        count: 0,
        name: '',
        keyCode: null
    }

 handleKeyUp = (e) =>{
        this.setState({
            keyCode: e.code
        })
    }
    componentDidMount(){
        document.addEventListener('keyup', this.handleKeyUp)
        document.title = `Vous avez cliqué ${this.state.count} fois`
    }

    componentDidUpdate(prevProps,prevState){
        console.log('hello')
        if(this.state.count !== prevState.count){
            document.title = `Vous avez cliqué ${this.state.count} fois`
            console.log('hello')
        }
    }

    handleClick = () => {
       this.setState((prevState) => {
        return {
            count: prevState.count +1
        }
       })
    }

   

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>Cliqué composant type class</button>
                <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
                <p>{this.state.keyCode}</p>
            </div>
        )
    }
}

export default ClassCount;