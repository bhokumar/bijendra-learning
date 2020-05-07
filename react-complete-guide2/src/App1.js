
import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import UserInput from './UserInput/UserInput';
//import UserOutPut from './UserOutput/UserOutPut';
//import { render } from 'react-dom';
<<<<<<< HEAD
 class App extends Component{

   State = {
   person :[
=======
  class App extends Component{
    
     State = {
    person :[
>>>>>>> c914bca0867f324c70dcd63b8e071abbec7c835d
      {name :'bijendra', age :22 },
      {name :'pandey1', age :23 },
      {name :'mukul', age :24 }

<<<<<<< HEAD
   ],
   otherState :'some other value',
       showPerson :false 
=======
    ],
    otherState :'some other value',
        showPerson :false 
>>>>>>> c914bca0867f324c70dcd63b8e071abbec7c835d

   } 
  
    switchNameHandler = ( newName ) => {
   this.setState({
      person :[
      {name : newName, age :24 },
      {name :'pandeymohit', age :28 },
      {name :'mukul', age :27 }
       ]
     } )
  }
      nameChangedHandler =( event ) => {
         this.setState ({
             person :[
      {name :event.target.value, age :24 },
      {name :event.target.value, age :28 },
      {name :event.target.value, age :27 }
  
     ]
     })
 }
  togglePersonHandler=() => {
      const doesShow=this.State.showPerson;
this.setState({showPerson : !doesShow});
  }
  render () {
 const style={
    backgroundColor :'White',
    font :'inherit',
    border :'1x solid blue',
    padding:'8px',
    cursor:'ponter'
  };
let person =null;
if (this.state.showPerson){
    

};
    return (
      <div className="App">
          <h1> hi i am react doveloper  </h1>
          <p>this is really working</p>
          <button 
          style={style}
          onClick={ () => switchNameHandler('pandey !')}>
             toggleperson </button>
          <Person 
            name={this.State.person[0].name}
            age={this.State.person[0].age}
            click={()=> this.togglePersonHandler}></Person> switchNameHandler('Rathore')} 
            changed={nameChangedHandler}
        person  />
          this.State.showPerson ==true ? React.createElement()
          }
          <div>
          <Person 
            name={this.State.person[1].name} 

            age={this.State.person[1].age}
           click={()=> this.switchNameHandler.bind(this,'Rathore')} 
            changed={nameChangedHandler} > 
            my hobbies : Racing</Person>          <Person
          name={personState.person[2].name }
           age={personState.person[2].age}
           click={()=> switchNameHandler('Rathore')} 
           changed={nameChangedHandler}
           person/>
          <UserInput/>
           <UserOutPut userName={setOutPutstate.userName}/>
           <UserOutPut userName={setOutPutstate.userName}/>
           <UserOutPut userName={setOutPutstate.userName}/>
          </div> : null
          );
          </div>
    )
  };
         } 
<<<<<<< HEAD
        export default app1;

=======
         export default app1;
>>>>>>> c914bca0867f324c70dcd63b8e071abbec7c835d
