import './App.css';
import React, { Component } from "react";



class Clue7 extends Component {
     handleLocation2 = (event) => {
        window.open("https://www.google.com/maps/dir/Memorial+to+the+Murdered+Jews+of+Europe,+Cora-Berliner-Stra%C3%9Fe+1,+10117+Berlin/Brandenburger+Tor,+Pariser+Platz,+Berlin/@52.514723,13.3774198,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a851c607196a5b:0x1434a79012ee5bc8!2m2!1d13.3787127!2d52.5139474!1m5!1m1!1s0x47a851c655f20989:0x26bbfb4e84674c63!2m2!1d13.3777041!2d52.5162746!3e2");
        event.preventDefault();
     }

    render(){
        return(
            <div className="clue1-header">
                <h2>Go to the the Reichstag</h2>
                <iframe title="Map_to_Gate" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2428.0340431776503!2d13.377419766128938!3d52.51472297981324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47a851c607196a5b%3A0x1434a79012ee5bc8!2sMemorial%20to%20the%20Murdered%20Jews%20of%20Europe%2C%20Cora-Berliner-Stra%C3%9Fe%201%2C%2010117%20Berlin!3m2!1d52.5139474!2d13.3787127!4m5!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor%2C%20Pariser%20Platz%2C%20Berlin!3m2!1d52.516274599999996!2d13.377704099999999!5e0!3m2!1sen!2sde!4v1658242164321!5m2!1sen!2sde" style={{border:0}} allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"
                height="300px" width="350px"></iframe>
                <br></br>
                <button className="Button" onClick={this.handleLocation2}>Open in Maps</button>
                <h2>Clue 7</h2>
                <h3 className="message">You reach the heart of German democracy, the Reichstag.
                    What are the first letters of each word in the phrase above the entrance?</h3>
                <h3 className="message"> - Agent SUNSET </h3>
            </div>
        );
    }
}

export default Clue7;