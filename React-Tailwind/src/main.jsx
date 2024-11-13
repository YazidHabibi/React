import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChildComponent from './Meeting3JSX/testing'
import Property from './Meeting3JSX/Props'
// import App from "./Meeting2JSX/App"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Property />
  </StrictMode>,
)
