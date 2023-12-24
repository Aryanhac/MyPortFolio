import React from 'react'
import html5 from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import aws from '../assets/aws.png'
import docker from '../assets/Docker.png'
import linux from '../assets/Linux.png'
import terraform from '../assets/terraform.png'
import ansible from '../assets/Ansible.png'
import jenkins from '../assets/Jenkins.png'
import kubernete from '../assets/kubernetes.png'
import java from '../assets/Java.png'
import python from '../assets/python.png'




const Skills = () => {
  return (
    <div name='skills' className="bg-[#0a192f] w-full min-h-screen text-gray-300">
        <div className='flex flex-col max-w-[1000px] justify-center w-full mx-auto pb-8 '>
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
                <img className='w-20 mx-auto'src={css} alt="html" />
                <p className='my-4'>CSS</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={node} alt="html" />
                <p className='my-4'>NODE</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={mongo} alt="html" />
                <p className='my-4'>MONGO</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={javascript} alt="html" />
                <p className='my-4'>JAVASCRIPT</p>
                </div>   
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={github} alt="html" />
                <p className='my-4'>GITHUB</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={react} alt="html" />
                <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={aws} alt="html" />
                <p className='my-4'>AWS</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={linux} alt="html" />
                <p className='my-4'>LINUX</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={jenkins} alt="html" />
                <p className='my-4'>JENKINS</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={docker} alt="html" />
                <p className='my-4'>DOCKER</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={ansible} alt="html" />
                <p className='my-4'>ANSIBLE</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={terraform} alt="html" />
                <p className='my-4'>TERRAFORM</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={kubernete} alt="html" />
                <p className='my-4'>KUBERNETE</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={java} alt="html" />
                <p className='my-4'>JAVA</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={python} alt="html" />
                <p className='my-4'>PYTHON</p>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Skills