import './App.css';
import React, { Component } from "react";



class Note extends Component {
    constructor(props) {
        super(props);
        this.state ={note: false};
    }

    handleClose = (event) => {
        this.setState({note: false});
        event.preventDefault();
    }

    handleNote = (event) => {
        this.setState({note: true});
        event.preventDefault();
    }



    render(){
        const Note = () => (
            <div className="Note">
                <h2 className="note_message">To the agent who finds this, </h2>
                <h2 className="note_message"> I have uncovered plans by an Anti-Nazi extremist group, the Baum Group, to assassinate Parliament members and blow up the Reichstag, the symbol of our German democracy. The members of the Baum Group are Holocaust survivors that believed that the Nuremberg Trials were not enough and wish to take revenge for their lost ones. Their current targets are a handful of prominent figures in the West Germany Parliamentary Council who once swore an oath to Hitler but have since repented. I’ve encrypted the bomb defusal code in clues using locations throughout the city. Use my decryption code on the pictures that you gathered along the way. I cannot be the one to stop this plot as I have been compromised by some members of the Baum Group. While it is too late for me, there is still time to prevent needless deaths. All hope is lost when the sun falls. </h2>
                <h2 className="note_message"> SUNSET </h2>
                <img src="/map.jpg" alt="map" width="350px" height="300px"/>
                <br></br>
                <button className="Button" onClick={this.handleClose}>Burn Note</button>
            </div>
        );
        return(
            <div id="head" className="clue1-header">
                {this.state.note===false && <button className="Button" onClick={this.handleNote}>Look at Note</button>}
                {this.state.note && <Note/>}
            </div>
        );
    }
}

export default Note;