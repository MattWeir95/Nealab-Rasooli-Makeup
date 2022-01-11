import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contact from "./routes/contact";
import Services from "./routes/services";
import Homepage from './routes/homepage';
import Portfolio from './routes/portfolio';
import Reviews from './routes/reviews';
import Portal from './routes/portal';
import Dashboard from "./routes/dashboard"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/admin" element={<Portal />} />


      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
