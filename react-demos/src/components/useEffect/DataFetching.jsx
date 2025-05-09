import { useEffect, useState } from 'react'

const DataFetching = () => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if(data && data.length){
                setData(data);
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h2>My Todos</h2>
            <ul>
                {data.map(t => (
                    <section key={t.id}>
                        <li >{t.title}</li>
                        <p >{t.body}</p>
                    </section>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching