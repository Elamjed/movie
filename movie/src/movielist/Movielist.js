import React from 'react'
import MovieCard from '../component/moviecard/MovieCard'
const Movielist = ({movieArray}) => {
    return (
        <div>
            {movieArray.map((item,i)=>
            <MovieCard key={i} item={item}/>
            )}
        </div>
    )
}

export default Movielist
