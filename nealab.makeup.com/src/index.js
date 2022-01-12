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
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './firebase/privateRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>

    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/admin" element={<Portal />} />
      <Route path="/dashboard" element= {
        <PrivateRoute>

        <Dashboard />
        </PrivateRoute>

      }
      />
      </Routes>
      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
