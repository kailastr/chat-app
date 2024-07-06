import './App.css';

//import pages
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Home from './pages/home/Home.jsx';

function App() {

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <h4 className='text-white'>Hey</h4> */}
        <Home />
      </div>
    </>
  )
}

export default App
