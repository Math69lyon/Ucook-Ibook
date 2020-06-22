import React, { Component } from "react";
import { Spring } from 'react-spring/renderprops'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Component4 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 3000, duration: 1000 }}
      >
        
        {props => (
          <div style={props}>
            <div style={c4Style}>
              <h1>About us</h1>
              <p>
                if you want to know more about the dream team!
                <button style={btn} onClick={this.props.toggle}>
                <li>
                <Link to="/about">About us</Link>
              </li>   
              </button>              
              </p>
              
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c4Style = {
  background: "darkblue",
  color: "white",
  padding: "1.5rem 1.5rem 5rem 1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default Component4;
