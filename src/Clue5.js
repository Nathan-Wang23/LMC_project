import './App.css';
import React, { Component } from "react";



class Clue5 extends Component {
     handleLocation2 = (event) => {
        window.open("https://www.google.com/maps/dir/Information+Panel+-+%E2%80%9CF%C3%BChrerbunker%22,+Gertrud-Kolmar-Stra%C3%9Fe+14,+10117+Berlin/Holocaust+Memorial,+Cora-Berliner-Stra%C3%9Fe,+Berlin/@52.5132646,13.3792322,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a8513c4f251d4f:0xe229c8801b2fa179!2m2!1d13.3809755!2d52.5125237!1m5!1m1!1s0x47a851c607196a5b:0x1434a79012ee5bc8!2m2!1d13.3787127!2d52.5139474!3e2");
        event.preventDefault();
     }

    render(){
        return(
            <div id="head" className="clue1-header">
                <h2>Go to the Holocaust Memorial</h2>
                <iframe title="Map_to_Memorial" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1214.0573123780714!2d13.379232158393124!3d52.51326464495321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47a8513c4f251d4f%3A0xe229c8801b2fa179!2sInformation%20Panel%20-%20%E2%80%9CF%C3%BChrerbunker%22%2C%20Gertrud-Kolmar-Stra%C3%9Fe%2014%2C%2010117%20Berlin!3m2!1d52.512523699999996!2d13.3809755!4m5!1s0x47a851c607196a5b%3A0x1434a79012ee5bc8!2sHolocaust%20Memorial%2C%20Cora-Berliner-Stra%C3%9Fe%2C%20Berlin!3m2!1d52.5139474!2d13.3787127!5e0!3m2!1sen!2sde!4v1658241320144!5m2!1sen!2sde" style={{border:0}} allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"
                height="300px" width="350px"></iframe>
                <br></br>
                <button className="Button" onClick={this.handleLocation2}>Open in Maps</button>
                <h2>Clue 5</h2>
                <h3 className="message">Ahead of you is a field of stone. A testament to the souls wrongfully lost. You empathize with the Baum Group’s sorrows, but you reflect on SUNSET’s words that needless killing should not be the solution. At this location,
                    the map says</h3>
                <h3 className="message">“Erected as a solemn reminder, what terrible event do these stones recall?”</h3>
                <h3 className="message"> - Agent SUNSET </h3>
            </div>
        );
    }
}

export default Clue5;