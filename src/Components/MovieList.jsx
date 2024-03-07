import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import HrMovieCard from './HrMovieCard';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const screenWidth = window.innerWidth;

function MovieList({ genreId, _index }) {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getMovieByGenreId(genreId);
    }, [genreId]);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(response => {
            console.log(response.data.results);
            setMovieList(response.data.results);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    }

    return (
        <div className='relative'>
            <HiOutlineChevronLeft className={`ntt-arrow z-10 ${_index % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`} onClick={() => sliderLeft(elementRef.current)} />
            <HiOutlineChevronRight className={`ntt-arrow z-10 right-0 ${_index % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`} onClick={() => sliderRight(elementRef.current)} />

            <div ref={elementRef} className='flex overflow-x-auto 
        gap-8 scrollbar-none pt-5 px-3 pb-10'>
                {movieList.map((item) => (
                    _index % 3 === 0 ? <HrMovieCard key={item.id} movie={item} /> : <MovieCard key={item.id} movie={item} />
                ))}
            </div>
        </div>

    )
}

export default MovieList