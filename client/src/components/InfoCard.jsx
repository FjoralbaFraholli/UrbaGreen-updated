import React from 'react'

function InfoCard({ info }) {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center'>
                <img
                    className='h-24 w-24 hover:cursor-pointer'
                    src={info.image} />
                <h4 className='text-lg my-2 font-serif font-medium text-green-700'>{info.title}</h4>
                <ul className='list-disc mx-auto'>
                    {info.items.map((item, key) => (
                        <li key={key} className='text-slate-900'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default InfoCard