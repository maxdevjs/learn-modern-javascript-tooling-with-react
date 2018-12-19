import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBounday from './DefaultErrorBoundary'
import './style.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDom, 1000)
}

ReactDom.render(
  <React.StrictMode>
    <DefaultErrorBounday>
      <App />
    </DefaultErrorBounday>
  </React.StrictMode>,
  document.getElementById('app')
)
