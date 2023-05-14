import React from 'react'
import { useState } from "react";

export default function Navbar() {
    const[text,setText]=useState('');

    const Onchange=(event)=>{
        setText(event.target.value);
    }
    return (
    <>
        <div className='my-12 flex justify-center text-5xl font-bold text-slate-700'>C2 LADDER</div>
        <div className='my-14 flex justify-center'>
            <input className='border-2 border-black p-3' type="text" value={text} onChange={Onchange} placeholder='Search'/>
            <button className='border-2 border-black mx-5 p-3' type='Button'>Search</button>
        </div>
    </>
  )
}
