import React, { Component } from 'react';
import './App.css';

import Input from './userInput.js';
import Response from './response.js';

class App extends Component {

  constructor(){
    super()
    this.state = {
      'helpClass': "help-show",
      'userLevel': "$",
      'actionHistory': [],
      'authenticated': true
    }
  }

  handleInputReturn(input){
    if(input !== ''){
      this.setState(prevState => ({
        actionHistory: [...prevState.actionHistory, input]
      }));
    }
  }

  //Conditionally render helpclass and stuff.
  render() {
    //TODO: Move this shit into the return like c'mon now.
    let inputResponse = this.state.actionHistory.map((action) => {
      return (
        <div>
          <Input 
            returnResponse={this.handleInputReturn.bind(this)}
            action={action}
          />
          <Response sudoResponse={this.handleSudo.bind(this)} action={action} />
        </div>
     )
    });

    return (
      <div className="top">
        <div className={this.state.helpClass}>To begin, type "help".</div>
        {this.state.actionHistory.length > 0 ?
          this.state.authenticated ? 
            <div>
              {inputResponse}
              <Input returnResponse={this.handleInputReturn.bind(this)} action={null} />
            </div>
            :
            <div>
              {inputResponse}
            </div>
        :
          <Input returnResponse={this.handleInputReturn.bind(this)} action={null} />
        }
      </div>
    );
  }
}

export default App;
