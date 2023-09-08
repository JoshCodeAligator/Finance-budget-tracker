import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./BudgetsContext"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetsProvider className="budget-styling">
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
)
