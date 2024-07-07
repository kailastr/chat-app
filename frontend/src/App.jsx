import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
//import pages
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Home from './pages/home/Home.jsx';

//pop-up package
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {

  const { authUser } = useAuthContext();

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Toaster />
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
          <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App
