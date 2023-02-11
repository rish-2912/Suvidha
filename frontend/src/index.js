import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from 'react-redux'
import store from './store';
import {
  BrowserRouter

} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import alertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transitions: transitions.SCALE
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <AlertProvider template={alertTemplate} {...options}> */}
      <App />

      {/* </AlertProvider> */}

    </BrowserRouter>

  </Provider>

)
