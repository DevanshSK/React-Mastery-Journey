interface MoviesInfo {
    movies: {
        movieTitle: string;
        moviePrice: number;
        movieDescription: string;
        movieRating: number;
    };
}

const MoviesInfo = ({ movies }: MoviesInfo) => {
    const { movieTitle, moviePrice, movieDescription, movieRating } = movies;

    return (
        <div className="m-6">
            <h1>{movieTitle}</h1>
            <p>Price: {moviePrice}</p>
            <p>Description: {movieDescription}</p>
            <p>Ratings: {movieRating}</p>
        </div>
    );
};


export default MoviesInfo