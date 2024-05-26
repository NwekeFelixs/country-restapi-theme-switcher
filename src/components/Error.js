import React from 'react'
import noResult from '../images/no-results.png'

function Error() {
  return (
    <div className='flex justify-center items-center flex-col mt-56'>
      <h1 className='text-4xl capitalize dark:text-white font-bold mb-2'>Page not founds</h1>
      <img src={noResult} alt='404' />

    </div>
  )
}

export default Error