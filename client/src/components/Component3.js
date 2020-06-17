import React, { Component } from "react";
import { Spring } from 'react-spring/renderprops'; 

export class Component3 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 2200, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c3Style}>
              <h1>Component 3</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus nobis adipisci eum minima deserunt at porro, veritatis
                officia commodi itaque voluptates vel suscipit assumenda soluta
                ipsa voluptatibus laudantium labore harum?
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
