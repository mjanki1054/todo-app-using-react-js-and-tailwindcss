import React, { useState } from 'react'
import { IoTrashOutline } from "react-icons/io5";

function Items(props) {
const [done,setDone] = useState(false)
  return (
    <div onClick={()=>setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
      <div>
        <span className='pr-3 text-[12px] text-slate-500'>{props.time}</span>
        <span className={`${done===true?'line-through':''} text-[16px]`}>{props.item}</span>
      </div>
      <div onClick={()=>props.removeHandler(props.id)}>
      <IoTrashOutline className='text-[#e74c3c]' />
      </div>
    </div>
  )
}

export default Items
