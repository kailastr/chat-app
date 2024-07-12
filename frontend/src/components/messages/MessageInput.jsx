import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage.js';

const MessageInput = () => {

    const [message, setMessage] = useState("");

    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message) return;

        await sendMessage(message);

        setMessage("");
    }

    return (
        <form
            className='px-4 py-3 '
            onSubmit={handleSubmit}
        >
            <div className='w-full relative'>
                <input
                    type="text"
                    placeholder='Write Message'
                    className='border border-gray-600 text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <span className='loading loading-spinner' /> : <IoSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput


// -------------------------------Initial code
// import React from 'react'
// import { IoSend } from "react-icons/io5";
// const MessageInput = () => {
//     return (
//         <form className='px-4 py-3 '>
//             <div className='w-full relative'>
//                 <input type="text"
//                     name=""
//                     id=""
//                     placeholder='Write Message'
//                     className='border border-gray-600 text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white'
//                 />
//                 <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                     <IoSend />
//                 </button>
//             </div>
//         </form>
//     )
// }
// export default MessageInput