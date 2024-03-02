import React from 'react'
const img = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_94444348-e1594735799301.png?auto=format&q=60&fit=max&w=930"

export default function Initial() {
  return (
    <>
        <section className=' py-[28vh]'>
            <center> 
                <h1 className='text-9xl text-white mb-8 font-bold italic'><img src={img} className='h-[150px] w-[150px] rounded-full' /></h1>
                <p className='font-semibold text-gray-600 italic'>Selct a chat to that will display here . you can chat with them with no hesitation </p>
            </center>
        </section>    
    </>
  )
}
