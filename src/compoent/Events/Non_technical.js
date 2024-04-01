/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import color_paint from "../../Assets/images/color_paint.jpg"
import dialoguewar from "../../Assets/images/dialoguewar.jpg"
import dillse from "../../Assets/images/classicaldance.jpg"
import dumbcharades from "../../Assets/images/dumbcharades.jpg"
import face_paint from "../../Assets/images/face_paint.jpg"
import gana from "../../Assets/images/singing.jpg"

import poetry from "../../Assets/images/poetry.jpg"
import rampwalk from "../../Assets/images/rampwalk.jpg"
import reels from "../../Assets/images/reels.jpg"

import sound_space from "../../Assets/images/musicalinstrument.jpg"
import standupcomedy from "../../Assets/images/standupcomedy.jpg"


const Non_technical = () => {
  return (
    <>

      <div class="container  py-5 mx-auto flex flex-wrap flex-col">
        <nav class="flex lg:mx-auto flex-wrap justify-center">
          <Link to='/events' class="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">
            Technical
          </Link>
          <Link to='/spot' class="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider">
            Spot
          </Link>
        </nav>
      </div>




      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Non Technical Events</h2>


          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <div>
              <Link to='/colour-paint' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={color_paint}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">One Minute Drawing</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dialogue-war' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={dialoguewar}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Dialogue War</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dillse-dance' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={dillse}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Dillse Dance</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dumb-charades' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={dumbcharades}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Dumb Charades</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/face-paint' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={face_paint}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">MINI POLAROID PAINTING</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/gana' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={gana}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Gaana</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/poetry-pros' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={poetry}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Poetry Pro's</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/ramp-walk' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={rampwalk}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Ramp Walk</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/reels' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={reels}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Reels</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/sound_space' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={sound_space}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Sound Space</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/stand-up-comedy' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={standupcomedy}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Stand Up Comedy</span>
                </div>
              </Link>
            </div>

          </div>

                          

        </div>
      </div>

    </>
  )
}

export default Non_technical