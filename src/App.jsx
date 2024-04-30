import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../component/HomePage'
import ProfilePage from '../pages/ProfilePage'
import LoginPage from '../component/LoginPage'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
