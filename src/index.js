import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';  // Import your App component

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your App component inside BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
