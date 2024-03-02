import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Otp from './pages/Otp.jsx'
import Profile from './pages/profile.jsx'
export default function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/otp' element={<Otp/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}