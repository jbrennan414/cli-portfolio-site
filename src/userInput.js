import React, { Component } from 'react';
import './App.css';

class Input extends Component{

    constructor(props){
        super(props);
        this.state = {
            'textWidth': 4,
            'textLength': 0,
            'currentUser': "user@computer:~$"
        }

        console.log(props)
    }

    //This function handles the width of the text box.
    //We use this to simulate the block carat commonly seen in a Linux CLI enviornment.
    textInputChange(e){
        console.log('We are in input change!', e.target.value.length);
        let inputValLength = e.target.value.length;

        //if inputVal length is greater than our currently saved value, chars where added,
        //so increase the size of the input box.
        if(inputValLength > this.state.textLength){
            this.setState({ 
                'textLength': inputValLength,
                'textWidth': this.state.textWidth + 7
            });
        //if inputVal length is less than our currently saved value, chars were removed.
        //Decrease the size of the input box.
        } else if(inputValLength < this.state.textLength && inputValLength !== 0){
            this.setState({ 
                'textLength': inputValLength,
                'textWidth': this.state.textWidth - 7
            });
        //if inputVal length is zero,
        //set the input back to its original state.
        } else if(inputValLength === 0){
            this.setState({ 
                'textLength': inputValLength,
                'textWidth': 5
            });
        }

        console.log(this.state)

    }

    //This function handles submission of our input.
    textInputSubmit(e){
        //We should only be running our logic if "enter" was pressed.
        if(e.key){
            if(e.key === 'Enter'){
                this.props.returnResponse(e.target.value);
            } else if(e.key === 'ArrowUp'){
                console.log('Up Arrow! This is gonna do something eventually.')
            } else if(e.key === 'ArrowDown'){
                console.log('Down Arrow! This is gonna do something eventually.')
            }
        }
        
    }

    render(){
        return(
            <div className="prompt-wrapper">
                <div className="prompt">user@computer:~$</div>
                {!this.props.action ? 
                    <input 
                        className="user-input"
                        type="text"
                        autoFocus
                        style={{'width': this.state.textWidth + 'px'}}
                        onChange={(e) => this.textInputChange(e)}
                        onKeyDown={(e) => this.textInputSubmit(e)}
                    >
                    </input>
                :
                    <input 
                        className="user-input"
                        type="text"
                        value={this.props.action}
                        readOnly
                        style={{'width': ((this.props.action.length + 1) * 8) + 'px'}}
                        onChange={(e) => this.textInputChange(e)}
                        onKeyDown={(e) => this.textInputSubmit(e)}
                    >
                    </input>
                }
                {!this.props.action ?
                    <div className="cursor"/>
                : ''}
            </div>
        )
    }
}

export default Input;