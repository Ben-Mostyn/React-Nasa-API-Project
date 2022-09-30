<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 8810931562d9bb08276f290f49e006ece5482cb4

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <App />
=======
  <BrowserRouter>
    <App />
  </BrowserRouter>
>>>>>>> 8810931562d9bb08276f290f49e006ece5482cb4
);
