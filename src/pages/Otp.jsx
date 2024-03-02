import React, { useState } from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import OtpInput from '../components/Otp';


const img = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_94444348-e1594735799301.png?auto=format&q=60&fit=max&w=930"



export default function Otp() {
    const [otp, setOtp] = useState('');
    const handleOtpChange = (otp) => {
        console.log(otp);
      };
  return (
   <>
    <main className='background h-screen pt-[20vh]'>
                <section className='container sm:w-[30vw] w-[90vw] m-auto rounded-lg shadow-2xl ' >
                    <center className='pt-10 text-white text-7xl'><img src={img} className='h-[150px] w-[150px] rounded-full' /> </center>
                    <center className='mt-5'>
                    <form>
                    <div className="App">
                        <div className='text-xl text-white mb-10'>Enter Otp sent to your mobile number :</div>
      <OtpInput length={6} onChange={handleOtpChange} />
    </div>
  
                        <div className='flex justify-center my-6 pb-6  align-middle'>
                        <button className='text-white ml-10 text-lg px-6 p-3 rounded-full bg-black '>Verify otp</button>
                        </div>
                    
                    </form>
                    </center>
                </section>
            </main>
   </>
  )
}
