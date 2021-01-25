import React from 'react';
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <div className='bg-white h-screen 
        flex flex-col justify-center items-center'>
            <h1 className="lg:text-9xl ms:text-7xl sm:text-5xl 
            text-3xl font-black mb-14">
                Background Image
            </h1>
            <Link className="py-6 px-10 bg-green-500 rounded-full text-3xl items-center hover:bg-green-300">
                Join Now Discord
            </Link>
        </div>
    )
}

export default Landing
