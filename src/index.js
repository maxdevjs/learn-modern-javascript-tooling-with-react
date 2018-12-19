import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'
import './style.css'

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)
