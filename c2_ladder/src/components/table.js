import React from 'react'

export default function Table(props) {
    const data=props.probdata;
    return (
    <div className='flex place-content-evenly my-5'>
        <table>
            <tr>
                <th>SNo.</th>
                <th>Name</th>
                <th>Question Code</th>
            </tr>
            {data.map((element) => {
                return(
                    <tr>
                        <td>{element[0]}</td>
                        <td>{element[1]}</td>
                        <td>{element[2]}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}
