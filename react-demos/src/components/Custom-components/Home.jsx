// import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

const Home = () => {
    // Approach 1: Manually fetching data in every component.
    // const [data, setData] = useState();

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((res) => res.json())
    //         .then((d) => setData(d));
    // }, [])

    // Approach 2: Use a custom hook to fetch data.
    const [ data, loading, error ] = useFetch("https://jsonplaceholder.typicode.com/todos");

    console.log(error);
    console.log(loading);

    return (
        <>
            {data && !loading && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    )
}

export default Home