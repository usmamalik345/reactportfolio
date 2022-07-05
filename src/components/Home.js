import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
            {/* Contoner */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  ' >
                <p className="text-pink-600"> Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Usama Shahid </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I'm a MERN Stack Developer </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'> I am a keen learner with a can-do attitude. I like to work with people who drive me forward. When I see that other people try their best at work, it motivated me to also push hard.</p>

                <div>
                    <button className="text-white border-2 px-6 py-3 my-2 flex items-center " > View Work 
                        <span className="hover:rotate-90 duration-300"> 
                        <HiArrowNarrowRight className='ml-4' />
                        </span>

                      </button>
                </div>
        </div>

    </div>
  )
}

export default Home