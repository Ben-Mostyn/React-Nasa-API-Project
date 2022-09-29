import React, { Component, state } from "react";
import axios from "axios";
import "./App.css";
import PicOfDay from "./components/PicOfDay";
import ISSInfo from "./components/ISS";
import Card from "./components/card";
import Weather from "./components/weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  render() {
    return (
      <>
        {/* <div>
        <button onClick={() => }>Click</button>
      </div> */}
        <button
          onClick={() => {
            this.setState({ toggle: !this.state.toggle });
            console.log(this.state.toggle);
          }}
        >
          BUTTON
        </button>

        {/* {this.state.toggle ? (
          <Card>
            <Weather />
            <PicOfDay />
            <ISSInfo />
          </Card>
        ) : null} */}
        {this.state.toggle && (
          <Card>
            <PicOfDay />
          </Card>
        )}
      </>
    );
  }
}

export default App;
