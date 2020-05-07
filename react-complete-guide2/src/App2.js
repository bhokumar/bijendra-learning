import './App.css';
import { Component } from 'react';
class App2 extends Component{
    state={
        userInput:''
    }

    inputChangeHandler=(event)=>{
    this.setState({userInput:event.target.value});
    }
    render(){
        return (
            <div className="App2">
                <input type="text" onChange={this.inputChangeHandler} 
                value={this.state.userInput}/>
<p> this.state.userInput</p>
            </div>
        );
    }
}
export default App2;