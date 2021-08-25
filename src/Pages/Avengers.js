import React, {useState, useEffect} from 'react'
import Card from '../Components/card'

const Avengers = () => {

    const [shows, setShow] = useState([])

    useEffect(() => {

        const setShows = async () => {
            const s = await getShows()
            const jsonS = await s.json()

            setShow(jsonS)
        }

        setShows()
    }, [])

    const getShows = async () => {
        const URL = 'https://api.tvmaze.com/search/shows?q=avengers'
        const data = await fetch(URL)

        return data
    }

    return (
        <div className="container bg-primary">
            <div className="grid mgrid">
                {shows.map(s => (
                    <Card key={s.show.id} showData={s} />
                ))}
            </div>

        </div>
    )
}

export default Avengers
