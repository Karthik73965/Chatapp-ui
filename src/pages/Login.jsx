import React from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const img = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_94444348-e1594735799301.png?auto=format&q=60&fit=max&w=930"

export default function Login() {
  return (
   <>
    <main className='background min-h-screen px-2 pt-[10vh] sm:pt-[10vh]'>
                <section className='container  sm:w-[30vw] w-[90vw] m-auto  rounded-lg shadow-2xl ' >
                    <center className='pt-10 pb-6 text-white text-7xl'><img src={img} className='h-[150px] w-[150px] rounded-full' /> </center>
                    <center className='text-3xl flex align-middle justify-center    text-white py-2'><MdOutlineAccountBalanceWallet  className='m-1 sm:mr-4' />
                        <span className='border-b'>Login to your account </span></center>
                    <center className='mt-5'>
                    <form>
                        
                        <label className='text-white mr-2 text-xl m-1 ' >Phone no :</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <label className='text-white mr-3 text-xl m-1 ' >Password :</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email adress'
                            className='border-b border-gray-300 my-4 text-white bg-transparent outline-none'
                        /><br/>
                        <div className='flex justify-around my-6  align-middle'><div className='text-gray-300 my-3 m text-md'>Dont have an account ?<Link className='text-white' to={'/Signup'}>Signup</Link></div><button className='text-white sm:ml-10 text-lg px-6 p-3 rounded-full bg-black'>Continue</button></div>
                        <center className="pb-10 ">
                            <div className='text-white mb-4'>Or </div>
                            <div className='border-2 cursor-pointer  text-white mx-16 p-2 rounded-lg border-white flex align-middle justify-center'><FcGoogle size={25} className='mr-7' />    Login with google</div>
                        </center>
                    </form>
                    </center>
                </section>
            </main>
   </>
  )
}
