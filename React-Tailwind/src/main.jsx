import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Statusbar } from './Meeting11/latihan'
// import { Statusbar } from './Meeting11/latihan'
// import { StatusMode } from './Meeting11/soal1'
// import Registration from './Meeting4/Layout/ADRegistration'
// import Test from './Meeting5/testing'
// import Mode from './Meeting11/soal1(2)'
// import Pages from './Meeting12/soal1,2,3'
// import Halaman from './Meeting12/soal4'
// import Pages from './Meeting12/soal1,2,3'
// import CobaAxios from './Meeting13/latihan'
// import Product from './Meeting9/soal1'
import Axios from './Meeting13/Get/tugas2'
// import Cuaca from './Meeting13/Get/tugas1'
// import TaskStatus from './Meeting11/soal2(2)'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Axios />
  </StrictMode>,
)