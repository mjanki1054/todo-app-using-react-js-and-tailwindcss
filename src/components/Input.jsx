import React, { useRef } from 'react';
import { AiOutlinePlus } from "react-icons/ai";

function Input(props) {
  const inputBox = useRef(); // Declare inputBox correctly

  return (
    <div className='p-3 flex justify-between'>
      <input
        type='text'
        placeholder='enter data here !!'
        className='p-3 focus:outline-none w-[90%] border border-slate-400'
        ref={inputBox} // Use inputBox here
      />
      <div
        className='cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-full flex justify-center items-center'
        onClick={() => {
          props.handler(inputBox.current.value)
          inputBox.current.value=""
        }} // Use inputBox here as well
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}

export default Input;
