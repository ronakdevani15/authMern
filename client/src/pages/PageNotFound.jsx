import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className=' h-[850px] '>
        <div className=' bg-slate-600 text-white text-center h-full w-full justify-center items-center'>
        Page not found <Link to={'/'}><span className='underline text-red-500' >Go to login page.</span></Link>
        </div>
    </div>
  )
}

export default PageNotFound
