import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
                        alt="Profile Image"
                    />
                </div>
            </div>
            <div className='chat-bubble text-white bg-blue-500'> Hi Buddy...</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:43</div>
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