import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

function AllMovie() {

    const movie = useParams();

    return (
        <>
            <Header />

        </>
    )
}

export default AllMovie