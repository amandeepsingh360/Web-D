import React from 'react'

export default function Table(props) {
    return (
        <div className='flex place-content-evenlyz'>
            {/* problems table */}
            <div className='my-9 flex justify-center'>
                <table className='border-2 border-black'>
                    <tr className='bg-slate-700 text-white'>
                        <th className='px-5 py-3'>Number of problems of </th>
                        <th className='px-5 py-3'>${props.user}</th>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Tried</td>
                        <td className='px-5 py-3'>${props.tried}</td>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Solved</td>
                        <td className='px-5 py-3'>${props.solved}</td>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Max Attempts</td>
                        <td className='px-5 py-3'>${props.maxattempts}</td>
                    </tr>
                </table>
            </div>
            {/* contest table  */}
            <div className='my-9 flex justify-center'>
            <table className='border-2 border-black'>
                    <tr className='bg-slate-700 text-white'>
                        <th className='px-5 py-3'>Contests of </th>
                        <th className='px-5 py-3'>${props.user}</th>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Number of Contests</td>
                        <td className='px-5 py-3'>${props.nocontest}</td>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Best Rank</td>
                        <td className='px-5 py-3'>${props.bestrank}</td>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Worst Rank</td>
                        <td className='px-5 py-3'>${props.wrstrank}</td>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Current Rank</td>
                        <td className='px-5 py-3'>${props.currrank}</td>
                    </tr>
                    <tr className='hover:bg-slate-400'>
                        <td className='px-5 py-3'>Best Rank</td>
                        <td className='px-5 py-3'>${props.bestranknum}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
