import React from "react";
import fgc from "../Assets/images/fgc.jpg"
import cola from "../Assets/images/Coca_Cola_Logo.png"

const sponser = () => {
  return (
    <>
      <section class="text-gray-600 body-font bg-grey-600">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl mt-6">TITLE SPONSORED BY</h2>
        <div class="container mx-auto flex px-2  items-center justify-center flex-col">
          <img class="lg:w-1/5 md:w-3/6 w-5/6  object-cover object-center rounded" alt="hero" src={fgc}/>
          <div class="text-center lg:w-3/4 w-full">
            
          <div class="bg-white sm:py-4 ">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="grid grid-cols-2 gap-16 rounded-lg bg-gray-100 p-6 sm:h-45 sm:content-evenly md:grid-cols-4">
          
            <div class="flex justify-center text-gray-400">
            <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={fgc}></img>
            </div>
     
            <div class="flex justify-center text-gray-400">
            <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={fgc}></img>
            </div>
           
            <div class="flex justify-center text-gray-400">
            <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={fgc}></img>
            </div>
           
            <div class="flex justify-center text-gray-400">
            <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={fgc}></img>
            </div>
         
          </div>
        </div>
      </div>

          </div>
        </div>
      </section>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
      <h2 class="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Event Sponsors</h2>
    </div>

    <div class="grid grid-cols-2  gap-4 rounded-lg md:grid-cols-4  lg:gap-6">
    
      <div class="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={ cola}></img>
      </div>
    
      <div class="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={ cola}></img>
      </div>
     
      <div class="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={ cola}></img>
      </div>
  
      <div class="flex items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={ cola}></img>
      </div>
  
      <div class="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={ cola}></img>
      </div>

      <div class="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" class=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={ cola}></img>
      </div>
     
    </div>
  </div>
</div>
         
    </>
  )
}
export default sponser