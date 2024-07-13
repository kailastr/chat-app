import React, { useEffect, useRef } from 'react';

import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from '../../components/skeletons/MessageSkeletons.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {

    const { messages, loading } = useGetMessages();
    // console.log(" ithaane ", messages);

    //for real-time messaging
    useListenMessages();

    //to refer the last element
    const lastMessageRef = useRef(null);

    //to scroll down to the last message
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);
    return (
        <div className=' px-4 flex-1 overflow-auto'>

            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className=' text-center'>Send a message to start the conversation</p>
            )}
        </div>
    )
}

export default Messages

//------------------------initial code
// import React from 'react';
// import Message from './Message';
// const Messages = () => {
//     return (
//         <div className='px-4 flex-1 overflow-auto'>
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//         </div>
//     )
// }
// export default Messages