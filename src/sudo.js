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

    componentDidMount(){
        console.log('You dont understand, Im going to kill myself if this doesnt work')
    }

    governCurrentPrompt(){
        console.log('Governing, our state is: ', this.state);
        if(this.state.attempts === 0){
            return(
                <div>
                    <div>
                        We trust you have received the usual lecture from the local System<br/>
                        Administrator. It usually boils down to these four things:<br/>
                        <br/>
                        #1 Respect the privacy of others.<br/>
                        #2 Think before you type.<br/>
                        #3 With great power comes great responsibility.<br/>
                        #4 The password is "toor"<br/>
                        <br/>
                    </div>
                        root's password:<input 
                            className="user-input"
                            type="text"
                            autoFocus
                            // style={{'width': this.state.textWidth + 'px'}}
                            // onChange={(e) => this.textInputChange(e)}
                            onKeyDown={(e) => this.handleSudoInput(e)} 
                        /><br/>
                </div>
            )
        } else if(!this.state.correctPassword && this.state.attempts < 3){
            <div>
                Sorry, try again.<br/>
                root's password:<input className="user-input" autoFocus onChange={(e) => this.handleSudoInput(e)} /><br/>
            </div>
        } else if(!this.state.correctPassword && this.state.attempts === 3){
            return(
                <div>
                    sudo: 3 incorrect password attempts<br/>
                </div>
            )
        } else if(this.state.currentPassword) {
            return null;
        }
    }

    handleSudoInput(e){
        if(e.key === 'Enter'){
            console.log('Hi! We are in here!', e.target.value);
            if(e && e.target.value === 'toor'){
                console.log('???????????????????')
                this.setState({ 'correctPassword': true });
                // this.props.handleSudo(true);
            } else if(e) {
                let newNum = this.state.attempts++
                this.setState({ 'attempts': newNum })
                // this.props.handleSudo(false);
            } else {
                // this.props.handleSudo(false);
            }
        }

        console.log(this.state)
    }

    render(){
        console.log('!!!!!!!!!!1', this.state)
        return(
            <div>
                {this.governCurrentPrompt()}
            </div>
        )
    }
}

export default Sudo;