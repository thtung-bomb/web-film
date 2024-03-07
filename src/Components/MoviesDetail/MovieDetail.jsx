import React, { useState, useEffect } from 'react';
import GlobalApi from '../../Services/GlobalApi';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Header from '../Header';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        getMovieDetails(id);
        getMovieVideo(id);
    }, [id]);

    const getMovieDetails = (id) => {
        GlobalApi.getMovieDetails(id)
            .then(response => setMovie(response.data))
            .catch(error => console.error('Error fetching movie details:', error));
    }

    const getMovieVideo = (id) => {
        GlobalApi.getMovieIntro(id)
            .then(response => {
                const videos = response.data.results;
                const trailer = videos.find(video => video.type === 'Trailer');
                if (trailer) {
                    const youtubeLink = `https://www.youtube.com/watch?v=${trailer.key}`;
                    setVideo(youtubeLink);
                } else {
                    setVideo(null);
                }
            })
            .catch(error => console.error('Error fetching movie video:', error));
    }

    if (!movie && !video) {
        return null; // Return null while data is being fetched
    }

    return (
        <>
            <Header />
            <div>
                <img src={IMAGE_BASE_URL + movie.backdrop_path} className='w-full h-[690px] object-cover mr-5 transition-all duration-100 ease-in opacity-35' />
                <div className='flex flex-col ml-10 gap-5 absolute bg-transparent bottom-10'>
                    <h1 className='bg-transparent text-white text-6xl font-medium'>{movie.title}</h1>
                    <p className='bg-transparent text-white text-balance text-lg font-medium'>{movie.overview}</p>
                    <div className='bg-transparent'>
                        <h2 className='text-white bg-transparent'>Avarage: {Math.floor(movie.vote_average)}</h2>
                        <h2 className='text-white bg-transparent'>Vote Count: {movie.vote_count}</h2>
                        <h2 className='text-white bg-transparent'>Release Date: {movie.release_date}</h2>
                        <h2 className='text-white bg-transparent'>Popularity: {movie.popularity}</h2>
                        <h2 className='text-white bg-transparent'>Language: <span className='uppercase bg-transparent'>{movie.original_language}</span></h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;
