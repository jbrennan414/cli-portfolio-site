import React from 'react';
import './App.css';

import UserInput from './userInput.js';
import Response from './response.js';

export default function App(){

  const [history, updateHistory] = React.useState([]);

  function handleSubmittedCommand(input){
    updateHistory(history => history.concat(input))
  }

  // handleSudo(value){
  //   console.log('Handle Sudo 1???', value);
  //   if(value !== this.state.authenticated){
  //     console.log('Her Handle Sudo 1 logic???')
  //     this.setState({ 'authenticated': value });
  //   }
  // }

  // let inputHistory = this.state.actionHistory.map((action, index) => {
  //     return (
  //       <div key={index}>
  //         <UserInput />
  //         <Response sudoResponse={this.handleSudo.bind(this)} action={action} />
  //       </div>
  //    )
  //   });


    return (
      <div className="top">
        <div className={"help-show"}>To begin, type "help".</div>
          <div>
            {/* {inputHistory} */}

            <Response history={history} />
            <UserInput onSubmitCommand={handleSubmittedCommand} />

          </div>
      </div>
    );
}