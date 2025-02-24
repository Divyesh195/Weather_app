import './App.css'
import './custom.css'

import React from 'react'

export default function Navbar() {
return (
<div className='bg-linear-to-l from-black to-gray-900 text-white font-bold sm:flex justify-between items-center py-4 px-3'>
  <div className="sm:text-xl text-md sm:flex items-center text-center gap-5">
    <div><a href='/' className='text-2xl'>Div95</a></div>
  </div>

  {/* Search bar */}
  <div className="w-full max-w-sm min-w-[200px] search">
    <div className="relative">
      <form >
      <input
        className="w-full bg-transparent placeholder:text-white text-white text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none hover:border-slate-300 shadow-sm focus:shadow" id='xyz' placeholder="Enter city.." />
      <button className="absolute top-1 right-1 flex items-center rounded bg-blue-400 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-500 focus:shadow-none active:bg-blue-500 hover:bg-blue-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="submit" id="btnsub"> Search </button>
      </form>
    </div>
  </div>
  {/* Search bar ends */}
</div>
)
}