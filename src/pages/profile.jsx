import React, { useState } from 'react'
import { FiCamera } from 'react-icons/fi';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";

const profileimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVlQ_ho1JIyjjRePM3nMpzpK4uYnof4ZSaQ&usqp=CAU"

export default function profile() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            setSelectedImage(URL.createObjectURL(file));
        } else {
            setSelectedImage(null);
        }
    };

    return (
        <>
            <main className='background min-h-screen pt-[5vh]'>
                <section className='container m-auto w-[90vw] sm:w-1/2 rounded-lg py-3 shadow-2xl ' >
                    <Link to={'/'}>
                    <div className='text-2xl flex underline  text-white m-4'><FaArrowLeft className='m-1' />
                        Back </div>
                    </Link>
                    <center className="py-9">
                        <div className='text-4xl text-white mb-6 underline font-semibold'> Your Profile </div>
                        <div className="relative  w-32 mb-10">
                            <img
                                src={selectedImage || profileimg}
                                alt="Selected"
                                className="w-44 object-cover  rounded-full"
                            />
                            <label htmlFor="photo-upload" className="absolute bottom-0 right-0 p-2 bg-white rounded-full cursor-pointer">
                                <FiCamera className="text-gray-700" size={20} />
                            </label>
                            <input
                                id="photo-upload"
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                                accept="image/*"
                            />
                        </div>
                        <form>
                        
                        <label className='text-white mr-2 text-xl m-1 ' >Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <label className='text-white mr-2 text-xl m-1 ' >Phone no &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <label className='text-white mr-3 text-xl m-1 ' >Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <label className='text-white mr-3 text-xl m-1 w-[10px] ' > Confirm Password :</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <div className='flex justify-center my-6  align-middle'><button className='text-white flex ml-10 text-lg px-6 p-3 rounded-full bg-black'>Update<BsPencilSquare className='m-[6px]' /> </button></div>
                       
                    </form>
                    </center>
                </section>
            </main>
        </>
    )
}
