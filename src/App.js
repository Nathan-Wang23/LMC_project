import './App.css';
import React, { Component } from "react";
import {getSunset} from 'sunrise-sunset-js';



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




  render() {
    const Sunset = () => (
        <div>
            <h2>Sunset is at {this.state.sunset.toLocaleTimeString()}</h2>
        </div>
    );
    const Clue1 = () => (
        <div className="App">
          <h2>Clue 1</h2>
          <img
                src="data:image/jpeg;base64,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"
                alt="Reichstag"
                />
          <p>Sometimes I like to visit the Reichstag.</p>
          <p>Last time I dropped a rock around here.</p>
        </div>
    );
    const Clue2 = () => (
        <div className="App">
          <h2>Clue 2</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Holocaust-Mahnmal_Berlin_2006.jpg" width="300" height="200" alt="Holocaust Meomorial"/>
          <p>A place to remember. A place to reflect.</p>
          <p>At the very center, I left an object</p>
        </div>
    );


    return (
        <div>
            <header className="App-header">
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
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Password..."/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </header>
        </div>
    );
  }
}

export default App;
