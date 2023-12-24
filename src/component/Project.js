import React from 'react'
import Travel from '../assets/Travel.png'
import Ecommerce from '../assets/Ecommerce.png'
import PortFolio from '../assets/PortFolio.png'
import kreiva from '../assets/Kreiva.png'
import pythonCode from '../assets/PythonCode.png'
import capstone from '../assets/capstone.png'
import professor from '../assets/professor.png'
import rete from '../assets/rete.png'
import vpc from '../assets/vpc.png'



const Project = () => {
    return (
        <div name='project' className='bg-[#0a192f] w-full md:h-screen text-gray-300 cursor-pointer '>
            <div className='mx-auto flex flex-col justify-center max-w-[1000px] h-full'>
                <div>
                    <p className='border-b-4 border-pink-600 inline fond-bold text-4xl'>Projects</p>
                    <p className='py-3'>There are some Project I have worked</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 text-center'>
                    <a href='https://ecommerce-plaza-aryanhac.onrender.com/'>
                    <div style={{ backgroundImage: `url(${Ecommerce})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Ecommerce
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href='https://github.com/Aryanhac/TravelAssistance'>
                    <div style={{ backgroundImage: `url(${Travel})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Travel Assistance
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.professorai.co/'>
                    <div style={{ backgroundImage: `url(${professor})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */} 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Professor AI
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href='https://reportphish.ai/'>
                    <div style={{ backgroundImage: `url(${rete})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Rete AI
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href=''>
                    <div style={{ backgroundImage: `url(${PortFolio})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                My PortFolio
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href='https://github.com/Aryanhac/VPC-Cloud-Formation-Template'>
                    <div style={{ backgroundImage: `url(${vpc})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                VPC Cloud Formation
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href='https://kreiva-iiitv2023.netlify.app/'>
                    <div style={{ backgroundImage: `url(${kreiva})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Kreiva
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href='https://github.com/Aryanhac/PythonAutomation-with-ChatGPT'>
                    <div style={{ backgroundImage: `url(${pythonCode})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Python Code Generation Tool
                            </span>
                        </div>
                    </div>
                    </a>
                    <a href='https://medium.com/@202051038/how-to-deploy-an-html-project-from-the-jenkins-pipeline-using-docker-aws-ec2-and-the-ecr-and-ecs-21774ca62af5'>
                    <div style={{ backgroundImage: `url(${capstone})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Capstone
                            </span>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project