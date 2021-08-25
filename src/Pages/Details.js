import React, {useState, useEffect} from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {format} from 'date-fns'
import {FaStar} from 'react-icons/fa'


const Details = () => {

    const pageID = useParams()

    const pattern = /[0-9]/
    const isValid = pattern.test(pageID.id)

   
    const [detail, setDetail] = useState({})

    // console.log(detail)
    
    const fetchDetails = async () => {

        if(isValid){

            const URL = `https://api.tvmaze.com/shows/${pageID.id}`
    
            const data = await fetch(URL)
    
            return data
        }

    }


    useEffect(() => {
        const setDetails = async() => {

            if(isValid){

                const d = await fetchDetails()
                const jsonD = await d.json()
    
                setDetail(jsonD)
            }

        }

        setDetails()
    },[])

    return (
        <>
        {isValid ? 
        <div className="info-card mgrid reverce-grid">
           {/* <img src={detail.image.medium } alt={detail.name}/> */}
            <div className="info-details">
                <p className={`info-rating`}> <FaStar /> {(detail.rating !== undefined && detail.rating.average !== null) ? detail.rating.average : "--"} / 10 </p>
                <h2 className="info-title">  {detail.name}  </h2>

                <p className="info-language"> <b> Language </b> :  {detail.language} </p>
                <div className="info-genre"> <b> Genres </b> : <ul> {detail.genres !== undefined && detail.genres.map(g => (
                    <li key={g}> {g} </li>
                    )) } </ul>
                </div>
                <p className="info-runtime"> <b> Runtime </b> :  {detail.runtime ? detail.runtime : "--"} min</p>
                <p className="info-premired"> <b> Premiered </b> :  {detail.premiered &&
                    format(new Date(detail.premiered), 'do MMM, yyyy')
                } </p>

                <p className="info-country"> <b> Country </b> :  {(detail.network !== null && detail.network !== undefined) ? detail.network.country.name : ""} </p>


                <p className="info-summery"> <b> Summery </b> : <br /> {detail.summery} </p>
            </div>
                <img className="info-thumbnail" src={ (detail.image !== null && detail.image !== undefined) ?  detail.image.medium : 'https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?w=1200&ssl=1'} alt={detail.name}/>

        </div> : <Redirect to="/error500" />

        }

        </>
    )
}

export default Details
