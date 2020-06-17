import React, {Component} from 'react'
import '../App.css';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';




class Home extends Component {
  render () {
    return ( 
      <div className="App">
        <Component1 />
        <Component2 />
        <Component3 />

      </div>
    );
  }
}


export default Home
