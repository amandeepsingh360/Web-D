// import logo from './logo.svg';
import Navbar from './Navbar';
// import Para from './Para';
import React, { useState } from 'react';
import './App.css';

function App() {
  // var navbarr=document.querySelector('.navbar');
  const HandleOnChange = (event)=>{
    setText(event.target.value);
    console.log(event.target.value);
  }

  const HandleOnClickLow = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  
  const HandleOnClickUp = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  
  var HandleOnClickClear=()=>{
    setText('');
  }
  
  const[myStyle,setMystyle]=useState({
    backgroundColor:'white',
    color : "black"
  });

  const[mydarkbtn,setmydarkbtn]=useState('Dark Mode');
  var HandleOnDark=()=>{
    if(myStyle.backgroundColor==='black'){
      setMystyle({
        backgroundColor:'white',
        color : "black",
        border:"1px solid black",
      })
      setmydarkbtn('Dark mode');
    }
    else{
      setMystyle({
        backgroundColor:'black',
        color:"white",
        border:"1px solid white"
      })
      setmydarkbtn('Light mode')
    }
  }
  const [text, setText] = useState('');
  // const [Page, setPage] = useState('');
  return (
    <>
      <Navbar heading="Discord" darkbtn={mydarkbtn} click={HandleOnDark}/>
      <form action="#" className='container'>
          <p><label htmlFor="TextBox">Enter something</label></p>
          {/* <textarea type="text" id='TextBox' name='TextBox' rows='2' cols='10'></textarea> */}
          <textarea name="TextBox" value={text} id="TextBox" onChange={HandleOnChange} style={myStyle} rows="10" cols="40"></textarea>
          <button className='Low-btn' type="Button" onClick={HandleOnClickLow} style={myStyle}>Convert to LowerCase</button>
          <button className='Up-btn' type="Button" onClick={HandleOnClickUp} style={myStyle}>Convert to UppperCase</button>
          <button className='Clear-btn' type="Button" onClick={HandleOnClickClear} style={myStyle}>Clear All</button>
          {/* <button className='dark-btn' type="Button" style={myStyle} onClick={HandleOnDark}>{darkbtn}</button> */}
      </form>
    </>
  );
}

export default App;
