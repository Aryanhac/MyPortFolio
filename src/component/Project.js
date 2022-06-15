import React from 'react'
import TicTac from '../assets/TicTacToe.png'
import Travel from '../assets/Travel.png'
import Ecommerce from '../assets/Ecommerce.png'
import Chatting from '../assets/chatting.jpg'
import PortFolio from '../assets/PortFolio.png'
import Weather from '../assets/Weather.png'

const Project = () => {
    return (
        <div name='project' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            <div className='mx-auto flex flex-col justify-center max-w-[1000px] h-full'>
                <div>
                    <p className='border-b-4 border-pink-600 inline fond-bold text-4xl'>Projects</p>
                    <p className='py-3'>There are some Project I have worked</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 text-center'>
                    <div style={{ backgroundImage: `url(${Ecommerce})` }} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Ecommerce
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Travel})` }} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Travel Assistance
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${TicTac})` }} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                TicTacToe
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Chatting})` }} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Chatting
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${PortFolio})` }} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                My PortFolio
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Weather})` }} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Weather Information
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project