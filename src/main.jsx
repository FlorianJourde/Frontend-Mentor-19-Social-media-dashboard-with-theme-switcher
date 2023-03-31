import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.scss'
import {ThemeProvider} from "./utils/context";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import {useTheme} from "./utils/hooks";
// import GlobalStyle from "./styles/GlobalStyle";


// const {theme} = useTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/*<GlobalStyle>*/}
        {/*<div>*/}
          <Navbar/>
          <Dashboard/>
          <Overview/>
        {/*</div>*/}
      {/*</GlobalStyle>*/}
    </ThemeProvider>
  </React.StrictMode>,
)
