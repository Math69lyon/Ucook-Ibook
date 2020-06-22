import React, { Component } from "react";
import { Spring } from 'react-spring/renderprops'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Component3 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 1 }}
        to={{ opacity: 1 }}
        config={{ delay: 1800, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c3Style}>
              <h1>Connection for users and cookers</h1>
              <p>
               
                <button style={btn} onClick={this.props.toggle}>
                you can click here to connect as a user

                <li>
                <Link to="/connection">connection</Link>
              </li>

              </button> <br></br>
              <button style={btn} onClick={this.props.toggle}>
              you can click here to connect as a cooker

                <li>
                <Link to="/cookerconnection">connection as cooker</Link>
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

const c3Style = {
  background: "skyblue",
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

export default Component3;
