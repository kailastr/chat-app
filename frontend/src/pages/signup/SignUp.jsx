import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'

//signUp hook
import useSignUp from '../../hooks/useSignUp.js'

const SignUp = () => {

    const [input, setInput] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const handleCheckboxChange = (gender) => {
        setInput({ ...input, gender: gender });
    }

    const { loading, signup } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(input);
        await signup(input);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-600'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
                    <span className='text-blue-500'>chatApp</span> Signup
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className='label p-2'>
                            <span className='text-base label-text text-gray-200'>Fullname</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder='Enter fullname'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                            value={input.fullName}
                            onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="userName" className='label p-2'>
                            <span className='text-base label-text text-gray-200'>Username</span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder='Enter username'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                            value={input.userName}
                            onChange={(e) => setInput({ ...input, userName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="signUpPassword" className='label p-2'>
                            <span className='text-base label-text text-gray-200'>Password</span>
                        </label>
                        <input
                            type="password"
                            name="signUpPassword"
                            id="signUpPassword"
                            placeholder='Enter password'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className='label p-2'>
                            <span className='text-base label-text text-gray-200'>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder='Re-enter password'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* gender radio button */}
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

                    <div className='flex justify-center'>
                        <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                            Already have an account ?
                        </Link>
                    </div>

                    <div className='flex justify-center items-center mt-5'>
                        <button className="btn glass btn-wide text-lg">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp


// ---------------------------- first Signup Page
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'
// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className=' w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-600'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
//                     <span className='text-blue-500'>chatApp</span> Signup
//                 </h1>

//                 <form >
//                     <div>
//                         <label htmlFor="" className='label p-2'>
//                             <span className='text-base label-text text-gray-200'>Fullname</span>
//                         </label>
//                         <input
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder='Enter fullname'
//                             className='input input-bordered input-primary w-full max-w-xs h-10'
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="" className='label p-2'>
//                             <span className='text-base label-text text-gray-200'>Username</span>
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
//                             <span className='text-base label-text text-gray-200'>Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             name=""
//                             id=""
//                             placeholder='Enter password'
//                             className='input input-bordered input-primary w-full max-w-xs h-10'
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="" className='label p-2'>
//                             <span className='text-base label-text text-gray-200'>Confirm Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             name=""
//                             id=""
//                             placeholder='Re-enter password'
//                             className='input input-bordered input-primary w-full max-w-xs h-10'
//                         />
//                     </div>

//                     {/* gender radio button */}
//                     <GenderCheckbox />

//                     <div className='flex justify-center'>
//                         <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                             Already have an account ?
//                         </a>
//                     </div>

//                     <div className='flex justify-center items-center mt-5'>
//                         <button className="btn glass btn-wide text-lg">Signup</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp