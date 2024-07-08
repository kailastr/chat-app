import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout.js';

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className=' mt-auto pt-2'>
            {!loading ?
                (
                    <span
                        className='flex items-center gap-2 text-white cursor-pointer border p-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-70 transition duration-200 ease-in-out'
                        onClick={logout}
                    >
                        <BiLogOut className='w-6 h-6' /> Logout
                    </span>
                )
                :
                (
                    <div
                        className='flex items-center gap-2 text-white cursor-pointer border p-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-70 transition duration-200 ease-in-out'
                    >
                        <span className='loading loading-spinner'></span>
                    </div>
                )
            }
        </div>
    )
}

export default LogoutButton