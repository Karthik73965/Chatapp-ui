import React from 'react'
import { SlLogin } from "react-icons/sl";
import { Link } from 'react-router-dom';
const img = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_94444348-e1594735799301.png?auto=format&q=60&fit=max&w=930"

export default function Signup() {
    return (
        <>
            <main className='background h-screen px-2 pt-[10vh] sm:pt-[20vh]'>
                <section className='container sm:w-[30vw] w-[90vw] m-auto rounded-lg shadow-2xl ' >
                    <center className='pt-10 pb-6 text-white text-7xl'><img src={img} className='h-[150px] w-[150px] rounded-full' /> </center>
                    <center className='text-3xl flex align-middle justify-center    text-white py-2'><SlLogin className='m-1 mr-4' />
                        <span className='border-b'>Create your account now </span></center>
                    <center className='mt-5'>
                    <form>
                        <label className='text-white mr-2 text-xl m-1 ' >Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder='Enter your name'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <label className='text-white mr-2 text-xl m-1 ' >Email &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; :</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <label className='text-white mr-3 text-xl m-1 ' >Phone no :</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <div className='flex justify-center my-6 mb-10 pb-10 align-middle'><div className='text-gray-300 my-3 m text-md'>Already had an account ? <Link className='text-white' to={'/login'}>Login</Link></div><button className='text-white ml-10 text-lg px-6 p-3 rounded-full bg-black'>Next</button></div>
                    </form>
                    </center>
                </section>
            </main>
        </>
    )
}
