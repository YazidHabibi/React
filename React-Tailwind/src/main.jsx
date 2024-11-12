import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './m2jsx/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
