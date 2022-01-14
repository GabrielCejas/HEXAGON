import React from "react"
import ReactDOM from "react-dom"
import "./bootstrap.min.css"
import {Provider} from "react-redux"
import store from "./redux/store/store"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
