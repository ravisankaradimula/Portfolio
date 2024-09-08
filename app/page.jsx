import React from 'react'
import { Button } from '@/components/ui/button';
import {FiDownload} from "react-icons/fi";
import Social from '@/components/Social';
import {BsArrowUpRight,BsGithub} from "react-icons/bs";
import Photo from '@/components/Photo';
const Home = () => {
  return (
    <section className='h-full'>
       <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className='text-center xl:text-left'>

            <h1 className='h1'>
              Hello I'm<br></br>
              <span className='text-accent'>Ravi Shankar</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>A passionate web enthusiast and skilled developer, focused on building efficient, user-centric web solutions and delivering exceptional digital experiences.</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
                  <a href="https://drive.google.com/file/d/1ZWK10-1ZsEXEeILi2xtStoP2g9Wajp99/view?usp=sharing" download>
                    <Button
                        variant="outline"
                        size="lg"
                        className="uppercase flex items-center gap-2"
                    >
                        <span>Visit CV</span>
                        {/* <FiDownload className="text-xl" /> */}
                        <BsArrowUpRight className=" text-2xl group-hover:text-accent"></BsArrowUpRight>
                    </Button>
                 </a>

                <div className='mb-8 xl:mb-0'>
                  <Social containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"/>
                  </div>
            </div>
            </div>
            <div>
             <Photo></Photo>
            </div>
          </div>
       </div>

    </section>
  )
}

export default Home;
