import React, { Component, state } from 'react';
import axios from 'axios';
import './App.css';
<<<<<<< HEAD
import PicOfDay from './components/PicOfDay';
import ISSInfo from './components/ISS';
import Card from './components/card';
import Weather from './components/weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }
  toggleBtn = () => {
    if (this.state.toggle === false) {
      console.log('changing to true');
      this.setState({ toggle: true });

    }
    else {
      this.setState({ toggle: false })
      console.log('switch to false')
    };
  }
  render() {

    return (
      <>
        {/* <div>
        <button onClick={() => }>Click</button>
      </div> */}
        <button onClick={
          this.toggleBtn
        }>BUTTON</button>

        {
          props.toggle ?

            <Card>
              <Weather />
              <PicOfDay />
              <ISSInfo />
            </Card>
            : null
        }


      </>
    );
  }
}
=======



const App = () => {
  return (
    <div><p>Hi</p></div>
  );
}

export default App;



>>>>>>> main

export default App;