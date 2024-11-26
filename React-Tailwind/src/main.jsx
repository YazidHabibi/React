import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Registration from './Meeting4/Layout/ADRegistration'
// import Test from './Meeting5/testing'
import Greeting  from './Meeting5/tugas4'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
  </StrictMode>,
)
  