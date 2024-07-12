import React from 'react';

//to change the time
import { formatDistanceToNow, formatRelative } from 'date-fns';

import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../zustand/useConversation.js';
const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? 'bg-cyan-500' : 'bg-violet-600'

    const formattedDate = formatDistanceToNow(new Date(message.createdAt), { addSuffix: true });

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        src={profilePic}
                        alt="Profile Image"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}`}> {message.message} </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
                {formattedDate}
            </div>
        </div>
    )
}

export default Message

//------------------------------Initial code
// import React from 'react'
// const Message = () => {
//     return (
//         <div className='chat chat-end'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img
//                         src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
//                         alt="Profile Image"
//                     />
//                 </div>
//             </div>
//             <div className='chat-bubble text-white bg-blue-500'> Hi Buddy...</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:43</div>
//         </div>
//     )
// }
// export default Message