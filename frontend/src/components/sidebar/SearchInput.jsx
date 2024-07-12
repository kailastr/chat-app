import React, { useState } from 'react';

//icons
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation.js';
import useGetConversation from '../../hooks/useGetConversation';
import { set } from 'date-fns';
import toast from 'react-hot-toast';

const SearchInput = () => {

    const [search, setSearch] = useState("");

    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversation();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return

        if (search.length < 3) {
            return toast.error("Search minimum of 3 characters");
        }

        const conversation = conversations.find((convo) => convo.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("No such user found..");
        }
    }

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Search.. '
                className='input input-bordered rounded-full'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <FaSearch className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput


//-------------------------initial state
// const SearchInput = () => {
//     return (
//         <form className='flex items-center gap-2'>
//             <input type="text" name="" id="" placeholder='Search.. ' className='input input-bordered rounded-full' />
//             <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//                 <FaSearch className='w-6 h-6 outline-none' />
//             </button>
//         </form>
//     )
// }
// export default SearchInput