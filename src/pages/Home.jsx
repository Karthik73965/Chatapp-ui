import React, { useEffect, useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import 'tailwindcss/tailwind.css';
import { MdEmojiEmotions } from "react-icons/md";
import Initial from '../components/Chats/Initial';
import Chats from '../components/Chats/Chats';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";
import { SlLogin } from "react-icons/sl";
const profile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVlQ_ho1JIyjjRePM3nMpzpK4uYnof4ZSaQ&usqp=CAU"
// Dummy avatars, replace with actual URLs or import statements for your images
const dummyAvatars = {
  'Ram': profile,
  'Namitha': profile,
  // ... add more avatars for each chat
};

const dummyChats = [
  { id: 1, name: 'Ram', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 2, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 3, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 4, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 56, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 6, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 5565, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 124, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 122, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 121, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 0, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 89, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 22, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 26, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 28, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 111, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 1231, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 122312321, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  { id: 2121, name: 'Namitha', messages: ['Project update?', 'Lets call.'], Profile:profile },
  // ... more dummy chats
];

const ChatApp = () => {
  const [chats, setChats] = useState(dummyChats);
  const [activeChat, setActiveChat] = useState(null);
  const [step , setstep] = useState(0)
  const length = window.innerWidth
  const [isProfileOpen, setIsprofileOpen] = useState(false)
  const selectChat = (chatId) => {
    const chat = chats.find((c) => c.id === chatId);
    setActiveChat(chat);
  };
  const [messages, setMessages] = useState([
    {
      text: "Hey Buddy Welcome to Nexgen Study. This is Luna, How can i help you in your acedamics",
      sender: 'server'
    }
  ]);
length <768 ? setInterval(() => {
  setIsprofileOpen(false)
}, 5000) :""
  return (
  <>
{
  length >768 ?   <div className="flex background h-screen  ">
  <div className="w-1/4  sticky  text-black overflow-auto">
    <div className="flex items-center justify-between h-[11vh] p-4 border-b-2 border-gray-700">
    <Link to={'/profile'}>

      <img src={profile} className='rounded-full w-[60px] h-[55px]' />
    </Link>
      <input
        type="text"
        placeholder='Search or Start a new chat'
        name="search"
        className='border-b border-gray-700 text-white bg-transparent mt-1 w-[250px] outline-none'
      />
         <div className=''>
                    <div
                        className="dropdown flex justify-center items-center gap-x-6 cursor-pointer"
                        onMouseEnter={() => setIsprofileOpen(true)}
                       onMouseLeave={() => setIsprofileOpen(false)}
                      
                    >
                          <FiMoreVertical color='white' size={24} />

                        {isProfileOpen && (
                            <div className="absolute  mt-[140px] py-2 mr-24 bg-white shadow-lg rounded-lg fade-in"
                  
                            >

                                <Link to={'/profile'} className='flex gap-2  transition ease-in duration-300 p-2 text mx-2 '>
                                    <CgDetailsMore color='black' size={'25px'} />
                                    <Link to={'/profile'}>Profile</Link>
                                </Link>


                                <div className='flex m-2 mx-2 transition ease-in duration-300 p-2 gap-2'>
                                    <SlLogin color='black' size={'25px'} />
                                    <div >Logout</div>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
    </div>

    {/* Chat list */}
    
      <ul className='overflow-auto h-[89vh]' >
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={`flex items-center p-4 cursor-pointer ${activeChat && activeChat.id === chat.id ? 'bg-gray-800 text-white' : 'bg-transparent text-white'} `}
            onClick={() => selectChat(chat.id)}
          >
            <img src={dummyAvatars[chat.name]} alt="Avatar" className='rounded-full w-[50px] h-[50px] mr-4' />
            <div>
              <div className='font-semibold text-xl '>{chat.name}</div>
              <div className=' text-gray-600 text-lg'>{chat.messages[chat.messages.length - 1]}</div>
            </div>
          </li>
        ))}
      </ul>
    
  </div>

  {/* Messages */}
  <div className="w-3/4 \ overflow-auto">
    <div className="p-4">
      {activeChat ? (
        <div>
         <div className='flex border-b-2 border-gray-700 '>
          <img src={activeChat.Profile} className='rounded-full w-[60px] h-[55px]'/>
          <div className="text-2xl mt-1  ml-6 sticky h-[8vh] text-white font-bold">{activeChat.name}
          <div className='text-gray-700 text-sm'>+91 8341755745</div>              
          </div>
         </div>
          {/* {activeChat.messages.map((message, index) => (
            <div key={index} className="p-2 my-2 bg-white rounded shadow">
              {message}
            </div>
          ))} */}
         <Chats/>
        </div>
      ) : (
        <Initial />
      )}
    </div>
  </div>
</div> : (
  step==  0 ? <div className="w-[100vw]  sticky background  text-black overflow-auto">
  <div className="flex items-center justify-between h-[11vh] p-4 border-b-2 border-gray-700">
  <Link to={'/profile'}>

<img src={profile} className='rounded-full w-[60px] h-[55px]' />
</Link>
    <input
      type="text"
      placeholder='Search or Start a new chat'
      name="search"
      className='border-b border-gray-700 text-white bg-transparent mt-1 sm:w-[250px] outline-none'
    />
     <div className=''>
                    <div
                        className="dropdown flex justify-center items-center gap-x-6 cursor-pointer"
                        onClick={() => setIsprofileOpen(!isProfileOpen)}
                                               
                    >
                          <FiMoreVertical color='white' size={24} />

                        {isProfileOpen && (
                            <div className="absolute  mt-[155px] py-2 mr-24 bg-white shadow-lg rounded-lg fade-in">

                                <Link to={'/profile'} className='flex gap-2  transition ease-in duration-300 p-2 text mx-2 '>
                                    <CgDetailsMore color='black' size={'25px'} />
                                    <Link to={'/profile'}>Profile</Link>
                                </Link>


                                <div className='flex m-2 mx-2 transition ease-in duration-300 p-2 gap-2'>
                                    <SlLogin color='black' size={'25px'} />
                                    <div >Logout</div>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
  </div>

  {/* Chat list */}
  
    <ul className='overflow-auto h-[89vh]' >
      {chats.map((chat) => (
        <li
          key={chat.id}
          className={`flex items-center p-4 cursor-pointer ${activeChat && activeChat.id === chat.id ? 'bg-gray-800 text-white' : 'bg-transparent text-white'} `}
          onClick={() => {selectChat(chat.id)
            setstep(1)
          }}
        >
          <img src={dummyAvatars[chat.name]} alt="Avatar" className='rounded-full w-[50px] h-[50px] mr-4' />
          <div className='ml-[2vw]'>
            <div className='font-semibold text-xl  '>{chat.name}</div>
            <div className=' text-gray-600 text-lg'>{chat.messages[chat.messages.length - 1]}</div>
          </div>
        </li>
      ))}
    </ul>
  
</div> : <div className="w-[100vw] h-screen background overflow-auto">
    <div className="p-4">
      {activeChat ? (
        <div>
         <div className='flex border-b-2 border-gray-700 '>
         <FaArrowLeft   onClick={() => {selectChat("  ")
            setstep(0)
          }} className='text-white my-4 mr-4 ' size={30} />
          <img src={activeChat.Profile} className='rounded-full w-[60px] h-[55px]'/>

          <div className="text-2xl mt-1  ml-6 sticky h-[8vh] text-white font-bold">{activeChat.name}
          <div className='text-gray-700 text-sm'>+91 8341755745</div>              
          </div>
         </div>
          {/* {activeChat.messages.map((message, index) => (
            <div key={index} className="p-2 my-2 bg-white rounded shadow">
              {message}
            </div>
          ))} */}
         <Chats/>
        </div>
      ) : (
        <Initial />
      )}
    </div>
  </div>
)
  

}
  
  </>
  );
};

export default ChatApp;
