import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if(data && data.length){
                setPosts(data);
            }
        }
        getData();
    }, [])

    return (
        <div>
            <h2>Fetch Data Exercise for useEffect</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataEffect