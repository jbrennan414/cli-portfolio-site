import React, { Component } from 'react';
import './App.css';

import Input from './userInput.js';
import Response from './response.js';

class App extends Component {

  constructor(){
    super()
    this.state = {
      'helpClass': "help-show",
      'actionHistory': []
    }
  }

  handleInputReturn(input){
    console.log('Hey, we made it to HandleInputReturn', input);
    
    if(input !== ''){
      this.setState(prevState => ({
        actionHistory: [...prevState.actionHistory, input]
      }));
    }
    console.log(this.state);
  }

  //Conditionally render helpclass and stuff.
  render() {

    console.log('this is our state right now!', this.state);
    //TODO: Move this shit into the return like c'mon now.
    let inputResponse = this.state.actionHistory.map((action) => {
      return (
        <div>
          <Input 
            returnResponse={this.handleInputReturn.bind(this)}
            action={action}
          />
          <Response action={action} />
        </div>
     )
    });

    return (
      <div className="top">
        <div className={this.state.helpClass}>To begin, type "help".</div>
        {this.state.actionHistory.length > 0 ?
          <div>
          {inputResponse}
          <Input returnResponse={this.handleInputReturn.bind(this)} action={null} />
          </div>
        :
          <Input returnResponse={this.handleInputReturn.bind(this)} action={null} />
        }
      </div>
    );
  }
}

export default App;
