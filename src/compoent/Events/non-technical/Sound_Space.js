import React from 'react'
import { useEffect } from 'react';
import sound_space from "../../../Assets/images/musicialinstrument.jpeg"
const Sound_Space = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
<>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={sound_space}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">SOUND SPACE
            </h1>
            <p class="mb-8 leading-relaxed text-justify">SOUND SPACE: can refer to the perception of sound in a physical or virtual environment. In the context of music, sound space is often used to describe the spatial characteristics of sound, including its directionality, distance, and location within a three-dimensional space.</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSduhlXxgX7Ic1qX7B7LJnODTotIwsZnWOm4aSK2sYjsGxOi4g/viewform?vc=0&c=0&w=1&flr=0'>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> 
                </a>
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤ The participant has to play his/her favourite song or music by using instrument.<br/>
                    ➤ Participants should bring their own instruments.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">C0-0RDINATOR :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • A. ALWIN RAJ – 62819 84480 – 2ND CSA.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4>• 100/- Per Head.</h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Sound_Space