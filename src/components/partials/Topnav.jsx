import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    const [query,setquery] = useState("");
    return (
        <div className='flex justify-start relative items-center ml-[15%]'>
            <i class="text-3xl text-zinc-400 ri-search-line"></i>
            <input 
                onChange={(event)=>setquery(event.target.value)}
                value={query} 
                className='mx-10 p-5 w-[50%] border-none outline-none text-zinc-400 text-xl' 
                type="text" 
                placeholder='Search Anything'
            />
            {query.length > 0 && <i onClick={(e)=>setquery("")} className="text-3xl text-zinc-400 ri-close-fill"></i> }
            

            <div className='overflow-auto absolute bg-zinc-200 w-[63%] top-[90%] max-h-[50vh]'>
                {/* <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold border-b-2 border-zinc-100 w-[100%] p-10 flex justify-start items-center'>
                    <img src="" alt="" />
                    <span>Hello EveryOne</span>
                </Link> */}
                
            </div>
        </div>
    )
}

export default Topnav