import React, { useState } from 'react'
import { IoMdSend, IoMdAttach, IoMdMic } from 'react-icons/io';
import { MdEmojiEmotions } from 'react-icons/md';

export default function Chats() {
    const [messages, setMessages] = useState([
        {
          text: "HI how are you whats going on ",
          sender: 'user'
        },
        {
          text: "HI how are you whats going on ",
          sender: 'friend'
        },
        {
          text: "HI how are you whats going on ",
          sender: 'user'
        },
        {
          text: "HI how are you whats going on ",
          sender: 'friend'
        },
        {
          text: "HI how are you whats going on ",
          sender: 'user'
        },

      ]);
  return (
    <>
       <div className='overflow-auto   h-[87vh]'>
     <div className='h-[80vh]'>
     {messages.map((msg, index) => (
                <div key={index} className={`flex  ${msg.sender === 'user' ? 'justify-end  ' : 'justify-start'}`}>
                  <div className={`rounded-2xl px-4 max-w-[60vw] text-wrap my-5 py-2  ${msg.sender === 'user' ? ' min-w-[10vw] max-w-[30vw]  border-2 bg-green-100  border-black' : '  border-2 min-w-[10vw] max-w-[30vw] border-gray-700 bg-gray-100'}`}>
                   
                    {msg.text}

                  </div>
                </div>
              ))} 
        </div>  
               <div className="flex items-center p-3 justify-between rounded-3xl bg-gray-800 sticky bottom-0">
      <MdEmojiEmotions size={30}  className="text-gray-400 mr-2 text-2xl" />
      <IoMdAttach size={30}  className="text-gray-400 text-2xl" />
    
      <input
        type="text"
        placeholder="Send a message"
        className="flex-1 mx-4 bg-transparent text-white outline-none placeholder-gray-500"
      />
      <IoMdSend size={30}  className="text-gray-400 text-2xl" />
    </div>
       </div>
    </>
  )
}
