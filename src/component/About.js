import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] w-full h-screen text-gray-50'>
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='grid grid-cols-2 max-w-[1000px] gap-8'>
            <div className=' pb-8 pl-4'>
                <p className='border-b-4 border-pink-500 text-4xl font-bold inline'>About</p>
            </div>
            <div></div>
        </div>
        <div className='sm:grid-cols-2 grid max-w-[1000px] w-full px-4 gap-8'>
            <div className='text-4xl sm:text-right font-bold'>
                <p>hi.Please take a look around</p>
            </div>
            <div>
            I specialize in web development and DevOps, with a focus on cloud-based solutions for scalable software architecture. Proficient in JavaScript, React, NodeJS, Java, Docker, and various AWS services, I have hands-on experience building and scaling web applications. I've worked at Tikaj and Mediaalley as a full-stack web developer. Notably, I maintain a 430+ day streak on LeetCode, solving over 640 questions, showcasing my consistent dedication. Additionally, my practical expertise in DevOps tools like Docker, Jenkins, and AWS contributes to efficient continuous integration and delivery processes in application development.
            </div>
        </div>
    </div>
    </div>
  )
}

export default About