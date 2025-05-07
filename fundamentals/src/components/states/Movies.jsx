import { useState } from 'react'

const Movies = () => {

    const [ movie, setMovie ] = useState([
        {id: 1, title: "Spiderman", ratings: 3},
        {id: 2, title: "Superman", ratings: 6},
    ]);

    const handleClick = () => {
        setMovie(movie.map((m) => (m.id === 1 ? {...m, title: "John Wick"} : m)))
    }

    return (
        <div>
            {movie.map(m => (
                <div key={m.id}>
                    <h1>Title: {m.title}</h1>
                    <p>Ratings: {m.ratings}</p>
                </div>
            ))}
            
            <button onClick={handleClick} >Change Rating</button>
        </div>
    )
}

export default Movies