
interface GamesInfo {
    games: {
        gameName: string;
        gameRating: number;
        gameGenre: string;
        gameLanguages: string[];
    }
}

const GamesInfo = ({ games }: GamesInfo) => {
    const { gameName, gameRating, gameGenre, gameLanguages } = games;

    return (
        <div className="my-6 ml-6">
            <h1>Game Name: {gameName}</h1>
            <p>Game Rating: {gameRating}</p>
            <p>Game Genre: {gameGenre}</p>
            <ul className="flex items-center gap-3">
                Languages:
                {gameLanguages.map((l: string) => (
                    <li>{l}</li>
                ))}
            </ul>
        </div>
    )
}

export default GamesInfo