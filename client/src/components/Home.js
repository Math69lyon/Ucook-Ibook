import React, { Component } from 'react'
import '../App.css';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import Component4 from '../components/Component4';

import img from '../components/img.jpeg';



class Home extends Component {
  render() {
    return (
<center>
      <div class="parent">
      <div class="child1">
      <section className="img">
          <img src={img} />
        </section>
      </div>
      <div class="child1 child2">
              <Component1 />
              <Component2 />
              <Component3 />
              <Component4 />
      </div>
    </div>
    </center>
    );
  }
}

export default Home