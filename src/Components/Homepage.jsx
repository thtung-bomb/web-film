import React from 'react';
import Header from './Header';
import Slider from './Slider';
import ProductionHouse from './ProductionHouse';
import GenreMovieList from './GenreMovieList';

function Homepage() {
    return (
        <div>
            <Header />
            <Slider />
            <ProductionHouse />
            <GenreMovieList />
        </div>
    )
}

export default Homepage