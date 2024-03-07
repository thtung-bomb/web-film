import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { Link } from 'react-router-dom/cjs/react-router-dom';

function HrMovieCard({ movie }) {

    return (
        <Link to={`/detail/${movie.id}`} key={movie.id}>
            <section className='hover:scale-110 duration-150 ease-in-out'>
                <img src={IMAGE_BASE_URL + movie.backdrop_path}
                    className='w-[110px] md:w-[260px] rounded-lg hover:border-[2px] cursor-pointer 
            border-gray-600' />
                <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
            </section>
        </Link>
    )
}

export default HrMovieCard