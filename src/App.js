import React, { Component, state } from "react";
import "./App.css";
import PicOfDay from "./components/PicOfDay";
import ISSInfo from "./components/ISS";
import Card from "./components/card";
import Weather from "./components/weather";
import { Routes, Route, Link } from "react-router-dom";

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
        <Link to="/">Pic of Day</Link>
        <Link to="ISS">ISSInfo</Link>
        {/* <Link to="Weather">Weather</Link> */}

        <Routes>
          <Route
            path="/"
            element={
              <Card>
                <PicOfDay />
              </Card>
            }
          />
          <Route path="ISS" element={<ISSInfo />} />
          {/* <Route path="Weather" element={<Weather />} /> */}
        </Routes>
      </>
    );
  }
}

export default App;
