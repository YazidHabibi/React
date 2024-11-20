import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Registration from './Meeting4/Layout/ADRegistration'
// import App from "./Meeting2JSX/App"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registration />
  </StrictMode>,
)
  