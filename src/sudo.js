import React, { Component } from 'react';
import './App.css';

class Sudo extends Component{
    constructor(props){
        super(props)
        this.state = {
            'correctPassword': false,
            'attempts': 0
        }

        this.handleSudoInput(false)
    }

    handleSudoInput(event){
        if(event && event.target.value === 'toor'){
            this.setState({ 'correctPassword': true });
            this.props.handleSudo(true);
        } else if(event) {
            this.setState({ 'attempts': this.state.attempts++ })
            this.props.handleSudo(false);
        } else {
            this.props.handleSudo(false);
        }
    }

    render(){

        if(this.state.attempts === 0){
            return(
                <div>
                    <div>
                        We trust you have received the usual lecture from the local System<br/>
                        Administrator. It usually boils down to these three things:<br/>
                        <br/>
                        #1 Respect the privacy of others.<br/>
                        #2 Think before you type.<br/>
                        #3 With great power comes great responsibility.<br/>
                        <br/>
                    </div>
                        root's password:<input className="user-input" autoFocus onKeyDown={(e) => this.handleSudoInput(e)} /><br/>
                </div>
            )
        } else if(!this.state.correctPassword){
            <div>
                Sorry, try again.<br/>
                root's password:<input className="user-input" autoFocus onKeyDown={(e) => this.handleSudoInput(e)} /><br/>
            </div>
        } else if(!this.state.correctPassword && this.state.attempts === 3){
            return(
                <div>
                    sudo: 3 incorrect password attempts<br/>
                </div>
            )
        }

        // return(
        //     <div>
        //         {this.state.attempts === 0 ?
        //             <div>
        //                 <div>
        //                     We trust you have received the usual lecture from the local System
        //                     Administrator. It usually boils down to these three things:

        //                     #1 Respect the privacy of others.
        //                     #2 Think before you type.
        //                     #3 With great power comes great responsibility.

        //                 </div>
        //                     <input>root's password: </input>
        //             </div>
        //         : !this.state.correctPassword ?
        //             <div>
        //                 Sorry, try again.
        //                 <input>root's password: </input>
        //             <div/>
        //         : this.state.attempts === 3 ?
        //             <div>
        //                 sudo: 3 incorrect password attempts<br/>
        //             </div>
        //         : '' }
        //     </div>
        // )
    }
}

export default Sudo;