import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <>
            <Link to={`/detail/${movie.id}`} key={movie.id}>
                <section className='hover:scale-110 duration-150 ease-in-out'>
                    <img src={IMAGE_BASE_URL + movie.poster_path}
                        className='w-[110px] md:w-[200px] rounded-lg hover:border-[2px] cursor-pointer 
            border-gray-600' />
                    <h2 className='w-[110px] md:w-[200px] text-white mt-2 text-center'>{movie.title}</h2>
                </section>
            </Link>
        </>

    )
}

export default MovieCard
