import React from 'react'
import StateButton from './StateButton';
const Home = () => {
  return (
    <div className='flex flex-col w-full justify-center '>
        <h1>ESP32 CONTROLLER</h1>
        <StateButton color={"red"}/>
        <StateButton color={"blue"}/>
    </div>
  )
}

export default Home;