import React, { Component } from "react";
import { Spring } from 'react-spring/renderprops'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Component1 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 800, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c1Style}>
              <h1>Here are the recipes</h1>
              <p>
               
                <button style={btn} onClick={this.props.toggle}>
                <li>
                <Link to="/Api">let's find a recipe</Link>
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

const c1Style = {
  background: "steelblue",
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

export default Component1;













