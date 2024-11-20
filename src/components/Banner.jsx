import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {
    return (
        <div >
          <div className="flex gap-4">
            <Carousel className="w-4/5 h-[600px]">
            <div className="relative w-full h-full">
              <img
                src="https://img.lazcdn.com/us/domino/0db31f86-2e1f-4d06-9969-29231fbf39a1_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
                alt="image 1"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that quality
                    of air that emanation from old trees, that so wonderfully changes
                    and renews a weary spirit.
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full">
              <img
                      src="https://img.lazcdn.com/us/domino/0db31f86-2e1f-4d06-9969-29231fbf39a1_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
                      alt="image 2"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 grid items-center w-full h-full bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that quality
                    of air that emanation from old trees, that so wonderfully changes
                    and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full">
              <img
                      src="https://img.lazcdn.com/us/domino/0db31f86-2e1f-4d06-9969-29231fbf39a1_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
                      alt="image 3"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 grid items-end w-full h-full bg-black/75">
                <div className="w-3/4 pb-12 pl-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that quality
                    of air that emanation from old trees, that so wonderfully changes
                    and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            </Carousel>
            <div className="flex flex-col w-1/5 gap-1 mx-auto mt-5">
            <div className='flex-1 overflow-hidden group'>
              <div className="flex items-center gap-6 p-4 transition-transform duration-700 rounded-md bg-cyan-50 group-hover:scale-105">
                <div className='flex-1 text-center'>
                      <h1 className='text-3xl font-black'>Bowl & Spoon</h1>
                      <p>Wooden Product</p>
                      <button className='p-2 py-1 mt-5 rounded-lg bg-secondary hover:text-white'>Explore All</button>
                </div>
                <div className='flex-1'>
                  <img src="../public/wood&spoonse.png" alt="" />
                </div>
              </div>
            </div>
            <div className='flex-1 overflow-hidden group'>
              <div className="flex items-center gap-6 p-4 transition-transform duration-700 rounded-md bg-cyan-50 group-hover:scale-105">
                <div className='flex-1 text-center'>
                      <h1 className='text-3xl font-black'>Bowl & Spoon</h1>
                      <p>Wooden Product</p>
                      <button className='p-2 py-1 mt-5 rounded-lg bg-secondary hover:text-white'>Explore All</button>
                </div>
                <div className='flex-1'>
                  <img src="../public/wood&spoonse.png" alt="" />
                </div>
              </div>
            </div>
            
            <div className='flex-1 overflow-hidden group'>
              <div className="flex items-center gap-6 p-4 transition-transform duration-700 rounded-md bg-cyan-50 group-hover:scale-105 hover:shadow-lg">
                  <div className='flex-1 text-center'>
                    <h1 className='text-3xl font-black'>Colorful Kettle</h1>
                    <p>Seramic Product</p>
                    <button className='p-2 py-1 mt-5 rounded-lg bg-secondary hover:text-white'>Explore All</button>
                  </div>
                  <div className='flex-1'>
                    <img src="../public/kettle.png" alt="" />
                  </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
    );
};

export default Banner;