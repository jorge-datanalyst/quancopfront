import React, { Component } from "react";
import data from "./images/data.svg";
import settings from "./images/settings.svg";
import stack from "./images/stack.svg";
import PopUp from './PopUp'
import PopUp2 from './PopUp2'

class Main_icons extends Component {
    state = {
        seen: false
      };
    
      togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });
      };

    handleEvent = event => {
      alert("Hizo Click!!!!");
    };

    render() {
        return (
            <div id='Icon-wrapper'>
            <img src={data} className="Icon-data" alt="data" onClick={this.togglePop}/>
            {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
            <img src={settings} className="Icon-settings" alt="settings" onClick={this.handleEvent}/> 
            <img src={stack} className="Icon-stack" alt="stack" onClick={this.handleEvent}/>       
            </div>
        );
    };
};
export default Main_icons;