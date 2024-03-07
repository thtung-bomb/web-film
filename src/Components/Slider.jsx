import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {

    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef();

    useEffect(() => {
        getTrendingVideos();
    }, [])

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos.then(response => {
            setMovieList(response.data.results);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 120;
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 120;
    }

    return (
        <div className='h-3/4'>
            <HiOutlineChevronLeft className='ntt-arrow mt-96 z-50' onClick={() => sliderLeft(elementRef.current)} />
            <HiOutlineChevronRight className='ntt-arrow mt-96 right-0 z-50' onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto w-full h-full px-16 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((movie) => (
                    <Link to={`/detail/${movie.id}`} key={movie.id} className='flex relative min-w-full h-[700px] object-cover object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in' id={movie.id}>
                        <img key={movie.id} src={IMAGE_BASE_URL + movie.backdrop_path} className='min-w-full h-full object-cover object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in' />
                        <div className='flex flex-col ml-10 gap-5 absolute bg-transparent bottom-10'>
                            <h1 className='bg-transparent text-white text-6xl font-medium'>{movie.title}</h1>
                            <p className='bg-transparent text-white text-balance text-lg font-medium'>{movie.overview}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Slider