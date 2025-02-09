import React from 'react'
import { Link } from "react-router-dom";


const SideNav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
        <h1 className='text-2xl text-white'>
            <i class="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span className='text-2xl font-bold'>Movie Vault</span>
        </h1>
        <nav className='flex flex-col gap-3 text-base text-zinc-400'>
            <h1 className='text-white font-semibold text-xl mt-10'>New Feeds</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4'>
            <i class="mr-2 ri-fire-fill"></i> Trending
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="mr-2 ri-bard-fill"></i> Popular
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="mr-2 ri-movie-2-fill"></i> Movies
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="mr-2 ri-tv-2-fill"></i> TV Shows
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="mr-2 ri-team-fill"></i> People
            </Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400' />
        <nav className='flex flex-col gap-3 text-base text-zinc-400'>
            <h1 className='text-white font-semibold text-xl mt-7'>Website Information</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4'>
            <i class=" mr-2 ri-information-fill"></i> About MV
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class=" mr-2 ri-phone-fill"></i> Contact Us
            </Link>
        </nav>
    </div> 
  )
}

export default SideNav