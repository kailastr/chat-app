import './App.css';

//import pages
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';

function App() {

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <h4 className='text-white'>Hey</h4> */}
        <SignUp />
      </div>
    </>
  )
}

export default App
