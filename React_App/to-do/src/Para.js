import React from 'react'

export default function Para() {
  return (
    <>
        <form action="#" className='container'>
            <p><label htmlFor="TextBox">Enter something</label></p>
            {/* <textarea type="text" id='TextBox' name='TextBox' rows='2' cols='10'></textarea> */}
            <textarea name="TextBox" id="TextBox" rows="10" cols="40">Hi</textarea>
        </form>
    </>
  )
}
