import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-gray-500 rounded p-2 cursor-pointer '>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img
              src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
              alt="Profile Picture"
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-semibold text-gray-200'>John Wich</p>
            <span>❤️‍🔥</span>
          </div>
        </div>
      </div>

      <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation