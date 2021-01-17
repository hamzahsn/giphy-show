import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

if (process.env.NODE_ENV === 'test') {
  const { worker } = require('./mock/browser')
  worker.start()
}

ReactDOM.render(<App />, document.getElementById('root'))
