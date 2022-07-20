import './App.css';
import React, { Component } from "react";



class Clue1 extends Component {
     handleLocation1 = (event) => {
        window.open("https://www.google.com/maps/place/Checkpoint+Charlie/@52.5075881,13.3881868,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851d15c26d8cd:0x23a50042477d89c8!8m2!3d52.5074434!4d13.3903913");
        event.preventDefault();
     }

    render(){
        return(
        <div id = "head" className="clue1-header">
            <h2>Go to Checkpoint Charlie</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Checkpoint_Charlie_Berlin.jpg/785px-Checkpoint_Charlie_Berlin.jpg"
                    alt="Checkpoint Charlie" height="300px" width="350px"/>
            <div className="google-map-code">
                <button className="Button" onClick={this.handleLocation1}>Open Map to Checkpoint Charlie</button>
            </div>
            <h3 className="message">Crossing the border was a success — now to make contact with Agent SUNSET’s informant.
                You enter the Checkpoint Charlie booth and look around for traces of the agent.
                Behind you, the door slams shut. A gray-haired, nondescript man in military uniform stands at the entrance to the booth. </h3>
            <h2>Clue 1</h2>
            <h3 className="message"> The gentleman in the booth wants to speak to you. What’s his first name? </h3>
            <h3 className="message"> - Agent SUNSET </h3>
        </div>
        );
    }
}

export default Clue1;