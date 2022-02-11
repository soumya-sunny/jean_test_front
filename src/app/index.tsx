import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApiProvider } from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'

// Token should be moved to .env
ReactDOM.render(
  <React.StrictMode>
    <ApiProvider
      url="https://jean-test-api.herokuapp.com/"
      token="9e1a35f0-c231-4f5c-9f9c-2bde2aca364d" // set your api token here
    >
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
