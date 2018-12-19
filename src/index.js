import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBounday from './DefaultErrorBoundary'
import './style.css'

ReactDom.render(
  <React.StrictMode>
    <DefaultErrorBounday>
      <App />
    </DefaultErrorBounday>
  </React.StrictMode>,
  document.getElementById('app')
)
