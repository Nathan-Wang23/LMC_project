import './App.css';
import React, { Component } from "react";



class Clue3 extends Component {

     handleLocation2 = (event) => {
        window.open("https://www.google.com/maps/dir/Topographie+des+Terrors,+Niederkirchnerstra%C3%9Fe,+Berlin/Berliner+Innenstadt,+10117+Berlin/@52.5075583,13.3810734,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a851cc389778c7:0x374bd5cc05c96648!2m2!1d13.3837024!2d52.5066836!1m5!1m1!1s0x47a851ce7d426d1f:0xdfcec0b5ae6f28c7!2m2!1d13.3813122!2d52.5083571!3e2");
        event.preventDefault();
     }



    render(){
        const Note = () => (
            <div className="clue1-header">
                <h2 className="message">You find Agent SUNSET’s old GPS tracker. You can use it to find SUNSET’s trail. </h2>
                <img src="https://www.radartutorial.eu/19.kartei/07.naval/pic/pic5122.jpg" alt="SUNSET Tracker"></img>
                <br></br>
            </div>
        );
        return(
            <div id="head" className="clue1-header">
                <Note/>
                <h2>Go to the June 17th Mural</h2>
                <iframe title="Map_to_Mural" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1214.214958136844!2d13.381073408393043!3d52.50755834495293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47a851cc389778c7%3A0x374bd5cc05c96648!2sTopographie%20des%20Terrors%2C%20Niederkirchnerstra%C3%9Fe%2C%20Berlin!3m2!1d52.506683599999995!2d13.383702399999999!4m5!1s0x47a851ce7d426d1f%3A0xdfcec0b5ae6f28c7!2sBerliner%20Innenstadt%2C%2010117%20Berlin!3m2!1d52.5083571!2d13.3813122!5e0!3m2!1sen!2sde!4v1658236739668!5m2!1sen!2sde" style={{border:0}} allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"
                height="300px" width="350px"></iframe>
                <br></br>
                <button className="Button" onClick={this.handleLocation2}>Open in Maps</button>
                <h2>Clue 3</h2>
                <h3 className="message">What kind of animal can you find on a blue flag?</h3>
                <h3 className="message"> - Agent SUNSET </h3>
            </div>
        );
    }
}

export default Clue3;