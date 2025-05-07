
const Button = () => {
    const handleClick = () => console.log(Math.round(Math.random() * 10));
    return (
        <button
            onClick={handleClick}
        >
            Button
        </button>
    )
}

export default Button