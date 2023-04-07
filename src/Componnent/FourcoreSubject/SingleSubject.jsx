import React from 'react'

export default function SingleSubject({title,dis,img}) {
  return (
    <div className='d-flex gap-5 align-items-center justify-content-center mb-5'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='text-light textdisandheader'>
            <h2>{title}</h2>
            <p className='text-muted'>{dis}</p>
        </div>
    </div>
  )
}
