import { games, movies } from "./data"
import GamesInfo from "./GamesInfo"
import MoviesInfo from "./MoviesInfo"
import RenderList from "./RenderList"

const RenderListPattern = () => {
    return (
        <div>
            <RenderList
                data={games}
                resourceName="games"
                listItem={GamesInfo}
            />
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />

            <RenderList
                data={movies}
                resourceName="movies"
                listItem={MoviesInfo}
            />

        </div>
    )
}

export default RenderListPattern