import './App.css';
import React, { Component } from "react";



class Clue4 extends Component {
    constructor(props) {
        super(props);
        this.state = {note: true};
    }



     handleLocation2 = (event) => {
        window.open("https://www.google.com/maps/place/Information+Panel+-+%E2%80%9CF%C3%BChrerbunker%22/@52.5125237,13.3787868,17z/data=!3m1!4b1!4m5!3m4!1s0x47a8513c4f251d4f:0xe229c8801b2fa179!8m2!3d52.5125237!4d13.3809755");
        event.preventDefault();
     }
     handleNote = (event) => {
        this.setState({note: true})
        event.preventDefault();
     }
     handleClose = (event) => {
         this.setState({note: false})
         event.preventDefault();
     }

    render(){

        return(
            <div id="clue" className="clue1-header">
                <h2>Go to Hitler’s Bunker</h2>
                <iframe title="Map_toBunker" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5540.145853737504!2d13.386017692195674!3d52.51060503999877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d52.5085416!2d13.381608!4m5!1s0x47a8513c4f251d4f%3A0xe229c8801b2fa179!2sInformation%20Panel%20-%20%E2%80%9CF%C3%BChrerbunker%22%2C%20Gertrud-Kolmar-Stra%C3%9Fe%2014%2C%2010117%20Berlin!3m2!1d52.512523699999996!2d13.3809755!5e0!3m2!1sen!2sde!4v1658239314462!5m2!1sen!2sde" style={{border:0}} allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"
                height="300px" width="350px"></iframe>
                <br></br>
                <button className="Button" onClick={this.handleLocation2}>Open in Maps</button>
                <br></br>
                <h2>Clue 4</h2>
                <h3 className="message">You make it to the first place on the map,
                    the site of Hitler’s former underground bunker.
                    Now just rubble buried beneath earth and concrete, nothing remains of the
                    Führerbunker except the sign “Mythos und Geschightszeucnis Führerbunker.”</h3>
                <h3 className="message">Pay close attention to the title of that sign. Count words left to right, then letters right to left.</h3>
                <h3> (1-4) (3-6) (4-1) (4-7) (1-2) (4-9) </h3>
                <h3 className="message"> - Agent SUNSET </h3>
            </div>

        );
    }
}

export default Clue4;