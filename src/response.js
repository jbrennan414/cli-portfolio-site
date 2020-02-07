import React, { Component } from 'react';
import './App.css';

class Response extends Component{
    constructor(props){
        super(props)
    }

    returnText(){
        console.log('Yo are we in here?')
        let action = this.props.action;

        switch(action){
            case 'help':
                return(
                    <div>
                        GNU bash, version 4.4.20(1)-release x86_64-pc-linux-gnu (not really) <br/>
                        These shell commands are defined internally.  Type help to see this list. <br/>
                        <br/>
                        This website was designed to emulate the Terminal Enviornment in Linux. <br/>
                        Would you prefer to view the same information in a more user friendly way? Coming soon! <br/>
                        See below for a list of commands. <br/>
                        <br/>
                        brennan [OPTION]<br/>
                            -a, --about-me || Print my about me section<br/>
                            -s, --skills || Print my skills section<br/>
                            -p, --projects || Print my projects section<br/>
                            -c, --contact-me || Print my contact me section<br/>
                        site [OPTION]<br/>
                            -p, --pretty || Redirect to the pretty version of this site<br/>
                            -pc, --prompt-color ||  Change the prompt color<br/>
                            -bc, --back-color || Change the background color<br/>
                        sshnuke<br/>
                        sudo -i<br/>
                    </div>
                )
            case 'brennan -a':
            case 'brennan --about-me':
                return(
                    <div>                                                               
                        <b>Hello! My name is Brennan!</b><br/>
                        <br/>
                        I am currently a Full Stack Developer based out of Denver, CO.<br/>
                        I am also an avid computer, software, and hardware enthusiast!<br/>
                        Much of my time is spent improving my skills, testing out new technologies, and developing personal projects.<br/>
                        Everything from mechanical keyboards and 3D printers to Assembly and Robotics is fair game.<br/>
                        See my Projects page to learn more about my current and past projects!<br/>
                        When I am not sharpening my skills or hacking away on a project,<br/>
                        I can be found working on my 4Runner, playing a select few video games, and enjoying various forms of live music!<br/>
                        <br/>
                        I am always looking to connect, so drop me an email!<br/>
                        <br/>
                        Thanks for stopping by!<br/>
                    </div>
                )
            default:
                return( action + ": command not found" )
        }
    }

    render(){
        return(
            <div className="response">
                {this.returnText()}
            </div>
        )
    }
}

export default Response;