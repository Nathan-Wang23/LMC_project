import './App.css';
import React, { Component } from "react";
import {getSunset} from 'sunrise-sunset-js';

import Clue1 from './Clue1.js';
import Clue2 from './Clue2.js';
import Clue3 from './Clue3.js';
import Clue4 from './Clue4.js';
import Clue5 from './Clue5.js';
import Clue6 from './Clue6.js';
import Clue7 from './Clue7.js';
import Bomb from './Bomb.js';
import Note from './Note.js';
import Lose from './Lose.js';




class App extends Component {

  constructor() {
    super();
    const sunset_time = getSunset(52.520008, 13.404954);


    if (JSON.parse(window.localStorage.getItem('state')) === -2 || JSON.parse(window.localStorage.getItem('state')) === -1 || JSON.parse(window.localStorage.getItem('state')) === 0 || JSON.parse(window.localStorage.getItem('state')) === 1 || JSON.parse(window.localStorage.getItem('state')) === 2 || JSON.parse(window.localStorage.getItem('state')) === 3 ||JSON.parse(window.localStorage.getItem('state')) === 4 || JSON.parse(window.localStorage.getItem('state')) === 5 || JSON.parse(window.localStorage.getItem('state')) === 6 || JSON.parse(window.localStorage.getItem('state')) === 7 ||JSON.parse(window.localStorage.getItem('state')) === 8 || JSON.parse(window.localStorage.getItem('state')) === 9 || JSON.parse(window.localStorage.getItem('state')) === 10 || JSON.parse(window.localStorage.getItem('state')) === 11 || JSON.parse(window.localStorage.getItem('state')) === 12 || JSON.parse(window.localStorage.getItem('state')) === 13 || JSON.parse(window.localStorage.getItem('state')) === 14) {
        this.state = {
            value: "",
            num_correct: JSON.parse(window.localStorage.getItem('state')),
            sunset: sunset_time,
            time: "",
            name: "",
        }
    } else {
        this.state= {
            value: "",
            num_correct: -1,
            sunset: sunset_time,
            time: "",
            name: "",
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
    let end = new Date(+time);
    let sunset_hours = this.state.sunset.getHours();
    let sunset_minutes = this.state.sunset.getMinutes();
    let sunset_seconds = this.state.sunset.getSeconds();
    end.setHours(sunset_hours, sunset_minutes, sunset_seconds, 0);
    if (time >= end) {
        end.setDate(end.getDate() + 1);
    }

    let diff = end - time;
    let hours = diff / 3.6e6 | 0;
    let minutes = (diff % 3.6e6) / 6e4 | 0;
    let seconds = (diff % 6e4) / 1000 | 0;


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
    let clue = document.getElementsByClassName("message");


    if (hours === "00" && minutes <= 10 && elm.style.color !== "white")  {
        elm.style.background ="linear-gradient(to bottom right, rgba(2,0,36,1) 0%, rgba(184,55,55,1) 35%, rgba(235,162,21,1) 100%)";
        elm.style.color = "white";

    }
    if (hours === "00" && minutes <= 10) {
        for (let i = 0; i <= clue.length; i++) {
            if (hours === "00" && minutes <= 10 && clue[i].style.color !== "white") {
                clue[i].style.color = "white";
            }
        }
    }
    if (hours === '00' && minutes === '00' && seconds === '00') {
        this.setState({num_correct: -2});
    } else {
        let new_time = hours + ":" + minutes + ":" + seconds;
        this.setState({
          value: this.state.value,
          num_correct: this.state.num_correct,
          sunset: this.state.sunset,
          time: new_time
        });
    }

  }


  setState(state) {
    console.log(this.state.num_correct);
    if (this.state.num_correct !== JSON.parse(window.localStorage.getItem('state'))) {
        window.localStorage.setItem('state', JSON.stringify(state.num_correct));
    }

    super.setState(state);
  }

  handleChange = (event) => {
      this.setState({value: event.target.value, num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
    }

  handleSubmit = (event) => {
    if (this.state.num_correct === 0 && this.state.value.toLowerCase() === "rainer") {
        this.setState({value: "", num_correct: 1})
        event.preventDefault();
    } else if (this.state.num_correct === 0 && this.state.value.toLowerCase() !== "rainer") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else if (this.state.num_correct === 2 && this.state.value.toLowerCase() === "bear") {
        this.setState({value: "", num_correct: this.state.num_correct + 1})
        event.preventDefault();
    } else if (this.state.num_correct === 2 && this.state.value.toLowerCase() !== "bear") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else if (this.state.num_correct === 4 && this.state.value.toLowerCase() === "bird") {
        this.setState({value: "", num_correct: this.state.num_correct + 1})
        event.preventDefault();
    } else if (this.state.num_correct === 4 && this.state.value.toLowerCase() !== "bird") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else if (this.state.num_correct === 6 && this.state.value.toLowerCase() === "terror") {
        this.setState({value: "", num_correct: this.state.num_correct + 1})
        event.preventDefault();
    } else if (this.state.num_correct === 6 && this.state.value.toLowerCase() !== "terror") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else if (this.state.num_correct === 8 && this.state.value.toLowerCase() === "holocaust") {
        this.setState({value: "", num_correct: this.state.num_correct + 1})
        event.preventDefault();
    } else if (this.state.num_correct === 8 && this.state.value.toLowerCase() !== "holocaust") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else if (this.state.num_correct === 10 && this.state.value.toLowerCase() === "spear") {
        this.setState({value: "", num_correct: this.state.num_correct + 1})
        event.preventDefault();
    } else if (this.state.num_correct === 10 && this.state.value.toLowerCase() !== "spear") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else if (this.state.num_correct === 12 && this.state.value.toLowerCase() === "ddv") {
        this.setState({value: "", num_correct: this.state.num_correct + 1})
        event.preventDefault();
    } else if (this.state.num_correct === 12 && this.state.value.toLowerCase() !== "ddv") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else if (this.state.num_correct === 13 && this.state.value.toLowerCase() === "ohr") {
      this.setState({value: "", num_correct: this.state.num_correct + 1})
      event.preventDefault();
    } else if (this.state.num_correct === 13 && this.state.value.toLowerCase() !== "ohr") {
        alert(this.state.value + " is not correct.");
        this.setState({value: ""});
        event.preventDefault();
    } else {
        this.setState({value: ""});
        event.preventDefault();
    }

  }

  handleSkip = (event) => {
    this.setState({value: "", num_correct: this.state.num_correct + 1})
    event.preventDefault();
  }

  handleStart = (event) => {
    this.setState({value: "", num_correct: this.state.num_correct + 1})
    event.preventDefault();
  }

  handleReset = (event) => {
    this.setState({value: "", num_correct: -1})
    window.localStorage.clear();
  }

  handleName = (event) => {
    this.setState({name: event.target.value});
  }

  handleClue1 = (event) => {
    this.setState({num_correct: this.state.num_correct + 1})
    event.preventDefault();
  }



  render() {
    const Sunset = () => (
        <div>
            <h2>Sunset is at {this.state.sunset.toLocaleTimeString()}</h2>
        </div>
    );
    const Intro = () => (
        <div className="App">
            <h2 className="message">July 20, 1965</h2>
            <h2 className="message">Agent {this.state.name === "" ? "[BLANK]" : this.state.name }, you are West Germany’s finest spy.
                It’s the summer of 1965. It’s been 4 years since the Berlin Wall was built, separating Berlin into East and West. Political divisions have continued to fester between the Eastern and Western Germany, devolving into bitter espionage, deceit, and backstabbing. Agent SUNSET is one of our top agents within East Berlin, and he’s key to our espionage efforts.</h2>
            <h2 className="message">We just received a Code Red distress signal from Agent SUNSET’s informant in Checkpoint Charlie — he’s in serious trouble. Your mission is to infiltrate East Berlin, meet with the informant to find out what you can, and try to help Agent SUNSET. You have until sunset to find and help SUNSET — any later, and we cannot guarantee that we will be able to get you safely out of East Berlin. The night guard is extremely dangerous, and you will be compromised.</h2>
            <h2 className="message">We’ve provided you with a false passport and documentation to help you cross into East Berlin at Checkpoint Charlie. Find Agent SUNSET, and find out what’s going on before it’s too late. We are worried that he may be in grave danger.</h2>
            <h2 className="message">Good luck Agent {this.state.name === "" ? "[BLANK]" : this.state.name }. You have until sunset.</h2>
            <button className="Button" onClick={this.handleStart}>Start</button>
        </div>
    );
    return (
        <div>
            {this.state.num_correct !== -2 && (
            <header id="head" className="App-header">
            <h1 className="header">Saving Agent SUNSET</h1>
            <Sunset />
            <h3>Time Left: {this.state.time} </h3>
            {this.state.num_correct === -1 && <input type="text" value={this.state.name} onChange={this.handleName} placeholder = "Your Agent Name..."/>}
            {this.state.num_correct === -1 && <Intro/>}
            {this.state.num_correct === 0 && <Clue1/>}
            {this.state.num_correct === 1 && (
                <div className="clue1-header">
                    <h2 className="message">Clue 1 Complete.</h2>
                    <h3 className="message">“You must be the one the agency sent,” he says, “I’m Dr. Reiner Hildebrandt, the informant.
                    Agent SUNSET was heading to the Topography of Terror before he sent a distress signal.
                    He mentioned looking for a beast gazing through the hole in the wall.
                    Head there to see if you can gather any further intelligence.”</h3>
                    <button className="Button" onClick={this.handleClue1}>Next</button>
                </div>

            )}
            {this.state.num_correct === 2 && <Clue2/>}
            {this.state.num_correct === 3 && (
                <div className="clue1-header">
                    <h2 className="message">Clue 2 Complete.</h2>
                    <h3 className="message">You hear a faint beeping within the bear’s mouth. Inside, you find Agent SUNSET’s tracking device.
                        The tracker indicates the coordinates of another potential location close by, the Aufbau der Republik mural.
                        It seems as if Agent SUNSET is carefully encrypting some sort of sensitive information. What could he have found out?</h3>
                    <h3 className="message">On the bottom side of the tracker a message is etched in the metal, “Look within the blue flag that houses the flying animal.” Yet another clue, perhaps?</h3>
                    <button className="Button" onClick={this.handleClue1}>Next</button>
                </div>

            )}
            {this.state.num_correct === 4 && <Clue3/>}
            {this.state.num_correct === 5 && (
                <div className="clue1-header">
                    <h2 className="message">Clue 3 Complete.</h2>
                    <h3 className="message">You find the bird on the blue flag.
                        This must be what SUNSET’s message is about. Upon closer inspection,
                        you realize the tile this bird was painted on has been tampered.
                        You lift the tile and find a rolled up note.</h3>

                    <Note/>
                    <button className="Button" onClick={this.handleClue1}>Next</button>
                </div>

            )}
            {this.state.num_correct === 6 && <Clue4/>}
            {this.state.num_correct === 7 && (
                <div className="clue1-header">
                    <h2 className="message">Clue 4 Complete.</h2>
                    <h3 className="message">Go to the second dot on SUNSETs map</h3>
                    <button className="Button" onClick={this.handleClue1}>Next</button>
                </div>

            )}
            {this.state.num_correct === 8 && <Clue5/>}
            {this.state.num_correct === 9 && (
                <div className="clue1-header">
                    <h2 className="message">Clue 5 Complete.</h2>
                    <h3 className="message">Make your way to the last dot on SUNSETs map</h3>
                    <button className="Button" onClick={this.handleClue1}>Next</button>
                </div>

            )}
            {this.state.num_correct === 10 && <Clue6/>}
            {this.state.num_correct === 11 && (
                <div className="clue1-header">
                    <h2 className="message">Clue 6 Complete.</h2>
                    <h3 className="message">You now have the encrypted code for the bomb defusal.</h3>
                    <h3 className="message">You made sure to write down the answers to the clues SUNSET provided.</h3>
                    <h3 className="message">TERROR HOLOCAUST SPEAR</h3>
                    <button className="Button" onClick={this.handleClue1}>Next</button>
                </div>

            )}
            {this.state.num_correct === 12 && <Clue7/>}


            {this.state.num_correct !== -1 && this.state.num_correct % 2 === 0 && this.state.num_correct !== 13 && this.state.num_correct !== 14 && (
                <div>
                    <div className="submission">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Password..."/>
                            </label>
                            <input className="Button" type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="bottom">
                        <button className="Button" onClick={this.handleSkip}>Skip</button>
                        <button className="Button" onClick={this.handleReset}>Reset</button>
                    </div>
                </div>

            )}
            {this.state.num_correct === 13 && (
                <div className="clue1-header">
                    <h3 className="message">You find the bomb in locker C-4 of the Reichstag</h3>
                    <h3 className="message">From left to right, input the letter found within each of the clues.</h3>
                    <h3 className="message">(Bunker–5) (Monument–1) (Gate–5) </h3>
                    <h3 className="message">You remember that you wrote down the answers to SUNSETs clues: </h3>
                    <h3 className="message">TERROR HOLOCAUST SPEAR</h3>

                    <h3 className="message">Quick! Put in the bomb defusal code!</h3>
                    <Bomb/>
                    <div className="submission">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Code..."/>
                            </label>
                            <input className="Button" type="submit" value="Enter" />
                        </form>
                    </div>
                    <button className="Button" onClick={this.handleReset}>Reset</button>
                </div>
            )}
            {this.state.num_correct === 14 && (
                <div className="clue1-header">
                    <h3 className="message">You successfully defused the bomb. For the meantime, peace is upheld.
                        You return back to headquarters and report the situation.
                        Agent SUNSET was never heard of again. No one will recognize the service he did for his country, other than you.
                        Remember his story and sacrifice well. Good job Agent.</h3>
                    <button className="Button" onClick={this.handleReset}>Reset</button>
                </div>
            )}
            </header>
            )}
            {this.state.num_correct === -2 && (
                <div className="clue1-header">
                    <Lose/>
                    <div className="bottom">
                        <button className="Button" onClick={this.handleReset}>Reset</button>
                    </div>
                </div>
            )}
        </div>

    );
  }
}

export default App;
