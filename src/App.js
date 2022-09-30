import React, { Component, state } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Style
import "./App.css";

//Components
import PicOfDay from "./components/PicOfDay";
import ISSInfo from "./components/ISS";
import Card from "./components/card";
import Weather from "./components/weather";

//Pages
import Landing from "./Pages/Landing";

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
        {/* Links to different pages - Link to and path MUST match */}
        <div className="nav-container">
          <Link className="nav-link" to="/">
            Home{" "}
          </Link>
          <Link className="nav-link" to="Pic of Day">
            Pic of Day
          </Link>
          <Link className="nav-link" to="ISS">
            ISSInfo
          </Link>
          {/* <Link to="Weather">Weather</Link> */}
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="Pic of Day"
            element={
              <Card>
                <PicOfDay />
                <Weather />
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
