
import React from 'react'
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div className=' w-full h-screen flex flex-col background items-center '>
        <h1 className='  mx-auto  mt-4 text-center w-11/12 text-4xl px-2 py-2 bg-white rounded-md font-bold'>Radnom Gifs Generator </h1>
        <div className=' flex flex-col w-full items-center'>
          <Random/>
          <Tag/>
        </div>

    </div>
  )
}

export default App

