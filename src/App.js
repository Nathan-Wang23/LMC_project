import './App.css';
import React, { Component } from "react";
import {getSunset} from 'sunrise-sunset-js';
import GoogleMapReact from 'google-map-react';

import Map from './Map.js';
import Clue1 from './Clue1.js';
import Clue2 from './Clue2.js';

class App extends Component {

  constructor() {
    super();
    const sunset_time = getSunset(52.520008, 13.404954);


    if (JSON.parse(window.localStorage.getItem('state')).num_correct === 0 || JSON.parse(window.localStorage.getItem('state')).num_correct === 1 || JSON.parse(window.localStorage.getItem('state')).num_correct === 2 || JSON.parse(window.localStorage.getItem('state')).num_correct === 3 || JSON.parse(window.localStorage.getItem('state')).num_correct === 4 || JSON.parse(window.localStorage.getItem('state')).num_correct === 5 || JSON.parse(window.localStorage.getItem('state')).num_correct === 6) {
        this.state = {
            value: "",
            num_correct: JSON.parse(window.localStorage.getItem('state')).num_correct,
            sunset: sunset_time,
            time: ""
        }
    } else {
        this.state= {
            value: "",
            num_correct: 0,
            sunset: sunset_time,
            time: ""
        }
    }


  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    let time = new Date();
    let time_diff = (this.state.sunset) - time;
    let new_date = new Date(time_diff);
    let hours = new_date.getHours();
    let minutes = new_date.getMinutes();
    let seconds = new_date.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    let elm = document.getElementById("head");

    if (hours === "00" && minutes < 40) {
        elm.style.background ="linear-gradient(to bottom right, rgba(2,0,36,1) 0%, rgba(184,55,55,1) 35%, rgba(235,162,21,1) 100%)";
    }
    let new_time = hours + ":" + minutes + ":" + seconds;
    this.setState({
      value: this.state.value,
      num_correct: this.state.num_correct,
      sunset: this.state.sunset,
      time: new_time
    });
  }


  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  handleChange = (event) => {
      this.setState({value: event.target.value, num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
    }

  handleSubmit = (event) => {
    if (this.state.num_correct === 0 && this.state.value === "clue1") {
        this.setState({value: "", num_correct: 1, sunset:this.state.sunset, time:this.state.time})
        event.preventDefault();
    } else if (this.state.num_correct === 0 && this.state.value !== "clue1") {
        alert(this.state.value + " is not correct.");
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    } else if (this.state.num_correct === 1 && this.state.value === "clue2") {
        this.setState({value: "", num_correct: 2, sunset:this.state.sunset, time:this.state.time})
        event.preventDefault();
    } else if (this.state.num_correct === 1 && this.state.value !== "clue2") {
        alert(this.state.value + " is not correct.");
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    } else if (this.state.num_correct === 2 && this.state.value === "clue3") {
        this.setState({value: "", num_correct: 3, sunset:this.state.sunset, time:this.state.time})
        event.preventDefault();
    } else if (this.state.num_correct === 2 && this.state.value !== "clue3") {
        alert(this.state.value + " is not correct.");
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    } else if (this.state.num_correct === 3 && this.state.value === "clue4") {
        this.setState({value: "", num_correct: 4, sunset:this.state.sunset, time:this.state.time})
        event.preventDefault();
    } else if (this.state.num_correct === 3 && this.state.value !== "clue4") {
        alert(this.state.value + " is not correct.");
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    } else if (this.state.num_correct === 4 && this.state.value === "clue5") {
        this.setState({value: "", num_correct: 5, sunset:this.state.sunset, time:this.state.time})
        event.preventDefault();
    } else if (this.state.num_correct === 4 && this.state.value !== "clue5") {
        alert(this.state.value + " is not correct.");
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    } else if (this.state.num_correct === 5 && this.state.value === "clue6") {
        this.setState({value: "", num_correct: 6, sunset:this.state.sunset, time:this.state.time})
        event.preventDefault();
    } else if (this.state.num_correct === 5 && this.state.value !== "clue6") {
        alert(this.state.value + " is not correct.");
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    } else if (this.state.num_correct === 6 && this.state.value === "3 Big Balls") {
        this.setState({value: "", num_correct: 7, sunset:this.state.sunset, time:this.state.time})
        event.preventDefault();
    } else if (this.state.num_correct === 6 && this.state.value !== "3 Big Balls") {
        alert(this.state.value + " is not correct.");
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    } else {
        this.setState({value: "", num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
        event.preventDefault();
    }

  }

  handleHint1 = (event) => {
    this.setState({value: "", num_correct: this.state.num_correct + 1, sunset:this.state.sunset, time:this.state.time})
    event.preventDefault();
  }






  render() {
    const Sunset = () => (
        <div>
            <h2>Sunset is at {this.state.sunset.toLocaleTimeString()}</h2>
        </div>
    );
    const location = {
      address: '1600 Amphitheatre Parkway, Mountain View, california.',
      lat: 37.42216,
      lng: -122.08427,
    };

    return (
        <div>
            <header id="head" className="App-header">
            <h1 >Escape Berlin!</h1>
            <Sunset />
            <h3>Time Left: {this.state.time} </h3>
            {this.state.num_correct === 0 && <Clue1/>}
            {this.state.num_correct === 1 && <Clue2/>}
            {this.state.num_correct === 2 && <h2>Clue 3</h2>}
            {this.state.num_correct === 3 && <h2>Clue 4</h2>}
            {this.state.num_correct === 4 && <h2>Clue 5</h2>}
            {this.state.num_correct === 5 && <h2>Clue 6</h2>}
            {this.state.num_correct === 6 && <h2>Final Location</h2>}


            <div>
                <div className="submission">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Password..."/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="bottomSkip">
                    <button className="skip" onClick={this.handleHint1}>Skip</button>
                </div>
            </div>
            </header>
        </div>

    );
  }
}

export default App;
