import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Usama, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a Full Stack Developer with over 6 months of experience in software development and proficiency in development tools. I love to build products that solve or attempt to solve real-life problems. I am a strong believer in teamwork and community building and I have volunteered as a mentor in programs such as  DevNation Learning Community and many others.
                I have experience in Frontend (HTML, CSS, Javascript, React) and UI/UX designs (Figma)</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;