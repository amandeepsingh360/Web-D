import React from 'react'
import Table from './Table'

export default function TextTrue(props) {
    return (
        <>
            <div>
                <p className='text-4xl mx-5'>{`Your data is ${props.data}`} &#128523;</p>
            </div>
            {<Table/>}
        </>
    )
}
