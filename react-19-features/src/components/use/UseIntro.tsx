import { Suspense } from 'react'
import BetterFetchTodo from './BetterFetchTodo'
import FetchTodo from './FetchTodo'

const UseIntro = () => {
    return (
        <div>
            <h1 className='text-lg font-bold'>Data fetching using use hook.</h1>
            {/* Using useEffect hook */}
            <FetchTodo />

            {/* Use suspense to handle loading of components */}
            <Suspense fallback={<h2>Loading...</h2>}>
                <BetterFetchTodo />
            </Suspense>
        </div>
    )
}

export default UseIntro