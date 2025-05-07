
const Move = () => {

    const handleMouseMove = () => {
        alert("Mouse movement detected in article");
    }

    return (
        <p
            onMouseMove={handleMouseMove}
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto magnam ipsa totam ut molestiae facilis reprehenderit veniam aperiam dolores pariatur corrupti ipsam est impedit, suscipit, commodi minus numquam, dignissimos quasi.
        </p>
    )
}

export default Move