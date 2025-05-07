
const Copy = () => {

    const handleCopy = () => {
        console.log("Dont copy this article, You cheater");
        
    }

    return (
        <p
            onCopy={handleCopy}
        >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet labore ut nobis illum repellendus. Cupiditate minus ducimus ratione modi eum!
        </p>
    )
}

export default Copy