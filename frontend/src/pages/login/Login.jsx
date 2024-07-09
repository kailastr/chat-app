import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(username, password);
        login(username, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-600'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
                    <span className='text-blue-500'>chatApp</span> Login
                </h1>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="userName" className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder='Enter username'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="userPassword" className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            placeholder='Enter password'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                            Don't have an account ?
                        </Link>
                    </div>

                    <div className='flex justify-center items-center mt-5'>
                        <button className="btn glass btn-wide text-lg" disabled={loading}>
                            {loading ? <span className='loading loading-spinner' /> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

// Starting code for login file
// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className=' w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-600'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
//                     <span className='text-blue-500'>chatApp</span> Login
//                 </h1>

//                 <form >
//                     <div>
//                         <label htmlFor="" className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder='Enter username'
//                             className='input input-bordered input-primary w-full max-w-xs h-10'
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="" className='label p-2'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             name=""
//                             id=""
//                             placeholder='Enter password'
//                             className='input input-bordered input-primary w-full max-w-xs h-10'
//                         />
//                     </div>
//                     <div className='flex justify-center'>
//                         <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                             Don't have an account ?
//                         </a>
//                     </div>

//                     <div className='flex justify-center items-center mt-5'>
//                         <button className="btn glass btn-wide text-lg">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login