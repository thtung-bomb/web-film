import React from 'react'
import GenesList from '../Constant/GenesList.jsx'
import MovieList from './MovieList.jsx'

function GenreMovieList() {
    return (
        <div>
            {GenesList.genere.map((item, index) => (
                <div key={item.id} className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id} _index={index} />
                </div>
            ))}
        </div>
    )
}

export default GenreMovieList