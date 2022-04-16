import React from 'react'
import html5 from '../assets/html.png'

const Skills = () => {
  return (
    <div name='skills' className="bg-[#0a192f] w-full h-screen text-gray-300">
        <div className='flex flex-col max-w-[1000px] justify-center h-full w-full mx-auto'>
            <div>
                <div className='border-b-4 inline border-pink-600 font-bold text-4xl'>Skills</div>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 w-full py-8 gap-4 text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Skills