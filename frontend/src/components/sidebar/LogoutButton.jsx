import React from 'react'
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
    return (
        <div className=' mt-auto pt-2'>
            <span className='flex items-center gap-2 text-white cursor-pointer border p-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-70 transition duration-200 ease-in-out'>
                <BiLogOut className='w-6 h-6' /> Logout
            </span>
        </div>
    )
}

export default LogoutButton