import React, { Component } from 'react';
import Sudo from './sudo.js'
import './App.css';

class Response extends Component{
    constructor(props){
        super(props)
        this.state = {
            'authenticated': true
        }
    }

    //Function that passes information around regarding our fake sudo command.
    handleSudo(auth){
        if(auth !== this.state.authenticated){
            this.setState({'authenticated': auth});
            this.props.sudoResponse(auth);
        }
    }

    returnText(){
        let action = this.props.action;

        if(action.includes('sudo')){
            return(
                <Sudo handleSudo={this.handleSudo.bind(this)}/>
            )
        }

        switch(action){
            case 'help':
                return(
                    <div>
                        GNU bash, version 4.4.20(1)-release x86_64-pc-linux-gnu (not really) <br/>
                        These shell commands are defined internally.  Type help to see this list. <br/>
                        <br/>
                        This website was designed to loosely resemble the Terminal Enviornment in Linux. <br/>
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
                        I am also an avid software, hardware, and all around computer enthusiast!<br/>
                        Much of my time is spent improving my skills, testing out new technologies, and developing personal projects.<br/>
                        Everything from mechanical keyboards and 3D printers to Assembly and Robotics is fair game.<br/>
                        See my Projects page to learn more about my current and past projects!<br/>
                        When I am not sharpening my skills or hacking away on a project,<br/>
                        I can be found working on my 4Runner, playing a select few video games, and enjoying various forms of live music!<br/>
                        <br/>
                        I am always looking to connect, so drop me an email!<br/>
                        Run <b>brennan -c</b> to find my contact information.<br/>
                        <br/>
                        Thanks for stopping by!<br/>
                    </div>
                )
            case 'brennan -c':
            case 'brennan --contact-me':
                return(
                    <div>
                        <b>Contact Information</b><br/>
                        <br/>
                        <a href="https://github.com/Six-S"><i>GitHub</i></a><br/>
                        <a href="mailto:example@example.com"><i>Email</i></a><br/>
                        <a href="https://www.reddit.com/"><i>Reddit</i></a><br/>
                        <a href="https://stackoverflow.com/"><i>Stack Overflow</i></a><br/>
                        <br/>
                    </div>
                )
            case 'brennan -s':
            case 'brennan --skills':
                return(
                    <div>
                        <br/>
                        <b>Languages:</b><br/>
                            Javascript<br/>
                            SQL<br/>
                            PHP<br/>
                            Python<br/>
                            Java<br/>
                            C/C++<br/>
                            Assembly<br/>
                        <br/>
                        <b>Tooling:</b><br/>
                            Linux/macOS<br/>
                            Docker<br/>
                            More needs to go here.<br/>
                        <br/>
                    </div>
                )
            case 'site -p':
            case 'site --pretty':
                return(
                    <div>
                        <br/>
                        <i>I'm afraid I can't do that, Dave.</i><br/>
                        <br/>
                        The "pretty" version of this website isn't ready for<br/>
                        the prying eyes of the public just yet.<br/>
                        <br/>
                        Check back later, would you?<br/>
                        <br/>
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