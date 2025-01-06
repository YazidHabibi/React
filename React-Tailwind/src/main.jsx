import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Registration from './Meeting4/Layout/ADRegistration'
// import Test from './Meeting5/testing'
import SimpleCalculator  from './Meeting8/soal3'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleCalculator />
  </StrictMode>,
)