import './App.css';
import React, { Component } from "react";



class Clue2 extends Component {
     handleLocation2 = (event) => {
        window.open("https://www.google.com/maps/place/Memorial+to+the+Murdered+Jews+of+Europe/@52.5139474,13.376524,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851c607196a5b:0x1434a79012ee5bc8!8m2!3d52.5139474!4d13.3787127");
        event.preventDefault();
     }

    render(){
        return(
            <div className="clue1-header">
                <h2>Clue 2</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Holocaust-Mahnmal_Berlin_2006.jpg" width="300" height="200" alt="Holocaust Meomorial"/>
                <br></br>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2428.034043177649!2d13.377314616128908!3d52.514722979813264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate%2C%20Pariser%20Platz%2C%2010117%20Berlin!3m2!1d52.516274599999996!2d13.377704099999999!4m5!1s0x47a851c607196a5b%3A0x1434a79012ee5bc8!2sHolocaust%20Memorial%2C%20Cora-Berliner-Stra%C3%9Fe%2C%20Berlin!3m2!1d52.5139474!2d13.3787127!5e0!3m2!1sen!2sde!4v1657198294299!5m2!1sen!2sde" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <br></br>
                <button onClick={this.handleLocation2}>Open in Maps</button>
                <p>A place to remember. A place to reflect.</p>
                <p>At the very center, I left an object</p>
            </div>
        );
    }
}

export default Clue2;