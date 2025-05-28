
const Posts = () => {
    // Generate a lot of posts
    const posts = Array.from({length: 100000}, (_, index) => `Post ${index}`);

    return (
        <div>
            <h1 className="text-lg font-semibold">All the posts on Instagram</h1>
            {posts.map(p => (
                <div key={p} className="post">{p}</div>
            ))}
        </div>
    )
}

export default Posts