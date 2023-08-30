import React, { useState } from 'react'

const StateButton = ({color}) => {

    const [buttonState, setButtonState] = useState("OFF")

    function changeState(){
        if(buttonState ==="OFF"){setButtonState("ON")}
        else if(buttonState ==="ON"){setButtonState("OFF")}
    }
  return (
    <button  style={{backgroundColor:color}} onClick={changeState} className='w-[40%] m-auto p-4 cursor-pointer bg-gray-700 my-4 text-white font-extrabold' >
      {buttonState}
      </button>
  )
}

export default StateButton;