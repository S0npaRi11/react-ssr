import React from 'react'
import {format} from 'date-fns'
import { Link } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

const card = ({ showData }) => {

    // console.log(typeof(showData.show.rating.average))

    // let ratingColor = ''
    // switch (showData.show.rating.average) {
    //     case showData.show.rating.average < 5:
    //         ratingColor = 'text-red'
    //         break
    //     case showData.show.rating.average >5 && showData.show.rating.average < 8:
    //         ratingColor = 'text-yellow'
    //         break;
    //     case showData.show.rating.average >8:
    //         ratingColor = 'teaxt-green'
    //         break;

    //     default:
    //         ratingColor = ''
    //         break;
    // }

    return (
        // <div className="container">
            <div className="movie-card text-primary bg-primary">
            {/* {show} */}
            <img className="movie-thumbnail" src={showData.show.image ? showData.show.image.medium : 'https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?w=1200&ssl=1'} alt={showData.show.name}/>
            <div className="movie-details">
                <h2> <Link className="movie-title" to={`/details/${showData.show.id}`}> {showData.show.name} </Link>  </h2>
                <p className={`movie-rating`}> <FaStar /> {showData.show.rating.average ? showData.show.rating.average : "--"} / 10 </p>
                <p className="movie-language"> <b> Language </b> :  {showData.show.language} </p>
                <div className="movie-genre"> <b> Genres </b> : <ul> {showData.show.genres.map(g => (
                    <li key={g}> {g} </li>
                )) }</ul>
                </div>
                <p className={`movie-runtime`}> <b> Runtime </b> :  {showData.show.runtime ? showData.show.runtime : "--"} min</p>
                <p className="movie-premered"> <b> Premiered </b>  :  {
                    format(new Date(showData.show.premiered), 'do MMM, yyyy')
                } </p>
                <p className="movie-country"> <b> Country </b> :  {showData.show.network !== null ? showData.show.network.country.name : ""} </p>

            </div>
        </div>
        // </div>

    )
}

export default card
