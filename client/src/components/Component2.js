import React, { Component } from "react";
import { Spring } from 'react-spring/renderprops'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 800, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Registration for users and cookers</h1>
              <p>

                <button style={btn} onClick={this.props.toggle}>
                you can click here to register as a user

                <li>
                <Link to="/registration"> user registration</Link>
                </li>
             
                </button>              
                </p>
                <button style={btn} onClick={this.props.toggle}>
                you can click here to register as a cooker

                <li>
                <Link to="/cookerregistration">register as cooker</Link>
                </li>
             
                </button> 
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default Component2;
