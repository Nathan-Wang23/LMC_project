import './App.css';
import React, { Component } from "react";



class Bomb extends Component {

     constructor(props) {
        super(props);
        this.state = {
        value: ""
        }
     }
     handleLocation2 = (event) => {
        window.open("https://www.google.com/maps/dir/Memorial+to+the+Murdered+Jews+of+Europe,+Cora-Berliner-Stra%C3%9Fe+1,+10117+Berlin/Brandenburger+Tor,+Pariser+Platz,+Berlin/@52.514723,13.3774198,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47a851c607196a5b:0x1434a79012ee5bc8!2m2!1d13.3787127!2d52.5139474!1m5!1m1!1s0x47a851c655f20989:0x26bbfb4e84674c63!2m2!1d13.3777041!2d52.5162746!3e2");
        event.preventDefault();
     }

     handleChange = (event) => {
       this.setState({value: event.target.value, num_correct: this.state.num_correct, sunset:this.state.sunset, time:this.state.time});
     }

    render(){
        return(
            <div className="clue1-header">
                <div className="submission">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_AOldZGa2VD8K0AVxSIa7NXOWpzeUguouA&usqp=CAU" alt="bomb" width="300px" height="200px"/>
                </div>
            </div>
        );
    }
}

export default Bomb;