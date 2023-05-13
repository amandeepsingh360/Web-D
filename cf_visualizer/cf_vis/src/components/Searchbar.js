import React, { useState } from 'react';
import TextTrue from './TextTrue';
import TextFalse from './TextFalse';

export default function Searchbar() {
    const [text, setText] = useState('');
    const [Show, setShow] = useState("1");
    const HandleOnChange = (event)=>{
        setText(event.target.value)
        console.log(event.target.value);
    }
    const HandleOnClick = ()=>{
        if(text.length>0){
            setShow("2");
            // <p className='text-9xl'>text</p>
        }
        else{
            setShow("3");
        }   
    }
    // const[text,setText]=useState('');
    return (
            <div>
                <form action="#" className='mx-5 my-4'>
                    <input type="text" className='border-2 py-1 px-1 border-black' placeholder='Search' value={text} onChange={HandleOnChange}/>
                    <button type='Button' className='mx-3 py-1 px-1 border-2 border-black' onClick={HandleOnClick}>Submit</button>
                </form>
                {(Show==="2") && <TextTrue data={text}/>}
                {(Show==="3") && <TextFalse/>}
            </div>
    )
}
