import './App.css';
import React, { Component } from "react";



class Clue2 extends Component {
     handleLocation2 = (event) => {
        window.open("https://www.google.com/maps/place/Topography+of+Terror/@52.5066836,13.3815137,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851cc389778c7:0x374bd5cc05c96648!8m2!3d52.5066836!4d13.3837024");
        event.preventDefault();
     }

    render(){
        return(
            <div id="head" className="clue1-header">
                <h2>Go to Topography of Terror</h2>
                <iframe title="Map_to_Wall" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2991.297073091605!2d13.384858166128696!3d52.50714792981181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47a851d15c26d8cd%3A0x23a50042477d89c8!2sCheckpoint%20Charlie%2C%20Friedrichstra%C3%9Fe%2C%20Berlin!3m2!1d52.5074434!2d13.3903913!4m5!1s0x47a851cc389778c7%3A0x374bd5cc05c96648!2sTopography%20of%20Terror%2C%20Niederkirchnerstra%C3%9Fe%208%2C%2010963%20Berlin!3m2!1d52.506683599999995!2d13.383702399999999!5e1!3m2!1sen!2sde!4v1658136121896!5m2!1sen!2sde" style={{border:0}} allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"
                height="300px" width="350px"></iframe>
                <br></br>
                <button className="Button" onClick={this.handleLocation2}>Open in Maps</button>
                <h2>Clue 2</h2>
                <h3 className="message">You’re at the Topography of Terror, facing the Berlin Wall. You see a beast looking through a breach in the wall. What is the beast?</h3>
                <h3 className="message"> - Agent SUNSET </h3>
            </div>
        );
    }
}

export default Clue2;