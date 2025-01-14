import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Statusbar } from './Meeting11/latihan'
// import { Statusbar } from './Meeting11/latihan'
// import { StatusMode } from './Meeting11/soal1'
// import Registration from './Meeting4/Layout/ADRegistration'
// import Test from './Meeting5/testing'
import Mode from './Meeting11/soal1(2)'
// import TaskStatus from './Meeting11/soal2(2)'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mode />
  </StrictMode>,
)