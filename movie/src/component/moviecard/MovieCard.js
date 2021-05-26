import React from 'react'
import '../moviecard/moviecard.css'
const MovieCard = ({item}) => {
    return (
       
<div className="card movie_card">
		  <img src={item.Poster} className="card-img-top" alt="..."/>
		  <div className="card-body">
		  	<i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">+
		  	</i>
		    <h5 className="card-title">{item.Title}</h5>
            <p className="Type">{item.Type}</p>
		   		<span className="movie_Year">{item.Year}</span>
		   		<span className="movie_info float-right"><i className="fas fa-star"></i> {item.rate} / 10</span>
		  </div>
		</div>

			
    )
}

export default MovieCard
