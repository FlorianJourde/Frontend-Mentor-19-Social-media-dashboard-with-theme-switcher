import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import {ThemeProvider} from "./utils/context";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar/>
      <Dashboard/>
      <Overview/>
    </ThemeProvider>
  </React.StrictMode>,
)
