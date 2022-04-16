import React from 'react'
import workImg from '../assets/workImg.jpeg'
import realestate from '../assets/realestate.jpg'

const Project = () => {
  return (
    <div className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className='mx-auto flex flex-col justify-center max-w-[1000px] h-full'>
            <div>
                <p className='border-b-4 border-pink-600 inline fond-bold text-4xl'>Projects</p>
                <p className='py-3'>There are some Project I have worked</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 text-center'>
                  <div style={{backgroundImage:`url(${workImg})`}} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                      {/* hover */}
                      <div className='opacity-0 group-hover:opacity-100'>
                          <span className='text-2xl text-white font-bold tracking-wider'>
                              React JS Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href="/">
                                  <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Demo</button>
                              </a>
                              <a href="/">
                              <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Code</button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div style={{backgroundImage:`url(${realestate})`}} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                      {/* hover */}
                      <div className='opacity-0 group-hover:opacity-100'>
                          <span className='text-2xl text-white font-bold tracking-wider'>
                              React JS Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href="/">
                                  <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Demo</button>
                              </a>
                              <a href="/">
                              <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Code</button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div style={{backgroundImage:`url(${workImg})`}} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                      {/* hover */}
                      <div className='opacity-0 group-hover:opacity-100'>
                          <span className='text-2xl text-white font-bold tracking-wider'>
                              React JS Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href="/">
                                  <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Demo</button>
                              </a>
                              <a href="/">
                              <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Code</button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div style={{backgroundImage:`url(${realestate})`}} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                      {/* hover */}
                      <div className='opacity-0 group-hover:opacity-100'>
                          <span className='text-2xl text-white font-bold tracking-wider'>
                              React JS Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href="/">
                                  <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Demo</button>
                              </a>
                              <a href="/">
                              <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Code</button>
                              </a>
                          </div>
                      </div>
                  </div><div style={{backgroundImage:`url(${workImg})`}} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                      {/* hover */}
                      <div className='opacity-0 group-hover:opacity-100'>
                          <span className='text-2xl text-white font-bold tracking-wider'>
                              React JS Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href="/">
                                  <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Demo</button>
                              </a>
                              <a href="/">
                              <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Code</button>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div style={{backgroundImage:`url(${realestate})`}} className='content-div shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                      {/* hover */}
                      <div className='opacity-0 group-hover:opacity-100'>
                          <span className='text-2xl text-white font-bold tracking-wider'>
                              React JS Application
                          </span>
                          <div className='pt-8 text-center'>
                              <a href="/">
                                  <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Demo</button>
                              </a>
                              <a href="/">
                              <button className='text-center bg-white py-3 px-4 m-2 font-bold rounded-lg text-gray-700'>Code</button>
                              </a>
                          </div>
                      </div>
                  </div>

            </div>
        </div>
    </div>
  )
}

export default Project