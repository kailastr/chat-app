import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput';

import { TbMessages } from "react-icons/tb";
import useConversation from '../../zustand/useConversation.js';
import { useAuthContext } from '../../context/AuthContext.jsx';

const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation } = useConversation();

    //cleanup function (unmount)
    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);
    return (
        <div className=' md:min-w-[450px] flex flex-col'>
            {
                !selectedConversation ?
                    (
                        <NoChatSelected />
                    )
                    :
                    (
                        <>
                            <div className='bg-slate-400 px-4 py-2 mb-2 flex items-center gap-3'>
                                <img src={selectedConversation.profilePic} className='h-9 w-9' alt="" />
                                <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                            </div>

                            <Messages />
                            <MessageInput />
                        </>
                    )
            }
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {

    const { authUser } = useAuthContext();

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {authUser.fullName} 🥳</p>
                <p>Select a chat to start messaging</p>
                <TbMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

//---------------------------------Initial code
// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// const MessageContainer = () => {
//     return (
//         <div className=' md:min-w-[450px] flex flex-col'>
//             <div className='bg-slate-400 px-4 py-2 mb-2'>
//                 <span className='label-text'>To : </span>
//                 <span className='text-gray-900 font-bold'>John Wick</span>
//             </div>

//             <Messages />
//             <MessageInput />
//         </div>
//     )
// }
// export default MessageContainer