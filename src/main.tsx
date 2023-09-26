import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { Provider } from 'react-redux/es/exports';
// import { store } from './services/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
)
