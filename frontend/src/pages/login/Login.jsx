import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-600'>
                <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
                    <span className='text-blue-500'>chatApp</span> Login
                </h1>

                <form >
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder='Enter username'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder='Enter password'
                            className='input input-bordered input-primary w-full max-w-xs h-10'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                            Don't have an account ?
                        </a>
                    </div>

                    <div className='flex justify-center items-center mt-5'>
                        <button className="btn glass btn-wide text-lg">Login</button>
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