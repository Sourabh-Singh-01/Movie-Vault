import React from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  return (
    <div className='flex justify-center relative items-center '>
        <i class="text-3xl text-zinc-400 ri-search-line"></i>
        <input className='mx-10 p-5 w-[50%] border-none outline-none text-zinc-400 text-xl' type="text" placeholder='Search Anything' />
        <i class="text-3xl text-zinc-400 ri-close-fill"></i>

        <div className='overflow-auto absolute bg-zinc-200 w-[50%] top-[90%] h-[50vh]'>
            <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold border-b-2 border-zinc-100 w-[100%] p-10 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello EveryOne</span>
            </Link>
            <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold border-b-2 border-zinc-100 w-[100%] p-10 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello EveryOne</span>
            </Link>
            <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold border-b-2 border-zinc-100 w-[100%] p-10 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello EveryOne</span>
            </Link>
            <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold border-b-2 border-zinc-100 w-[100%] p-10 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello EveryOne</span>
            </Link>
            <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold border-b-2 border-zinc-100 w-[100%] p-10 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello EveryOne</span>
            </Link>
        </div>
    </div>
  )
}

export default Topnav