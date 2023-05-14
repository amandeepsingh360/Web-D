import React from 'react'
import Data from './data'
import { useState } from 'react'
export default function Buttons() {
  const[btn,setbtn]=useState(1);
  const onclick1=()=>{
    setbtn(1);
  }
  const onclick2=()=>{
    setbtn(2);
  }
  const onclick3=()=>{
    setbtn(3);
  }
  const onclick4=()=>{
    setbtn(4);
  }
  const onclick5=()=>{
    setbtn(5);
  }
  return (
    <>
    <div className='flex-col items-center'>
      <div className='flex place-content-evenly'>
          <button type='Button' onClick={onclick1}>Div A</button>
          <button type='Button' onClick={onclick2}>Div B</button>
          <button type='Button' onClick={onclick3}>Div C</button>
          <button type='Button' onClick={onclick4}>Div D</button>
          <button type='Button' onClick={onclick5}>Div E</button>
      </div>
    </div>
    {<Data btnstate={btn}/>}
    </>
  )
}
