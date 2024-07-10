import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversation from '../../hooks/useGetConversation.js'

//to get random emoji
import { getRandomEmoji } from '../../utils/emoji.js';

const Conversations = () => {

    const { loading, conversations } = useGetConversation();
    console.log(conversations);
    return (
        <div className='py-2 flex flex-col overflow-auto'>

            {conversations.map((conversation, indx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIndx={indx === conversations.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-spinner mx-auto' /> : null}
        </div>
    )
}

export default Conversations

//-------------------------Initial State
// const Conversations = () => {
//     return (
//         <div className='py-2 flex flex-col overflow-auto'>
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//         </div>
//     )
// }
// export default Conversations