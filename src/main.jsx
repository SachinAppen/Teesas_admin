import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter >
    <ToastContainer />
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

