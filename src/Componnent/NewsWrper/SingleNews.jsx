import React from 'react';


export default function SingleNews({ Newsimage }) {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 text-center p-3'>

            <div className='m-auto Blogimage'>
                <img className='w-100' src={Newsimage} alt="image" />
            </div>
            <div className='pt-2'>
                <span className='text-muted text-left'> August 22, 2019</span>
                <h3>Lorem ipsum dolor.</h3>
            </div>
        </div>
    )
}
