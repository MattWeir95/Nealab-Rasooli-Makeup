import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contact from "./routes/public/contact";
import Services from "./routes/public/services";
import Homepage from './routes/public/homepage';
import Portfolio from './routes/public/portfolio';
import Reviews from './routes/public/reviews';
import Portal from './routes/public/portal';
import Dashboard from "./routes/private/dashboard"
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './firebase/privateRoute';
import AdminServices from './routes/private/adminServices';
import AdminPortfolio from './routes/private/adminPortfolio';
import AdminReviews from './routes/private/adminReviews';

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


    <Route path="/dashboard/services" element={
        <PrivateRoute>

        <AdminServices />
        
        </PrivateRoute>

      }
      
      />

<Route path="/dashboard/portfolio" element={
        <PrivateRoute>

        <AdminPortfolio />
        
        </PrivateRoute>

      }
      
      />

<Route path="/dashboard/reviews" element={
        <PrivateRoute>

        <AdminReviews />
        
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
