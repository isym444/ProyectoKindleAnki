import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import './style/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect, Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
