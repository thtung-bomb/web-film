import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function HeaderItem({ name, Icon }) {

    const links = {
        home: '/',
        watchList: '/watch',
        originals: '/originals',
        movies: '/movies',
        contact: '/contact'
    };

    return (
        <Link to={links[name.toLowerCase()]} className='text-white flex gap-3 text-[15px] font-semibold cursor-pointer 
        hover:underline underline-offset-8 mb-2'>
            <Icon className="h-5 w-5" />
            <h2 className=''>
                {name}
            </h2>
        </Link>
    )
}

export default HeaderItem