
function ProfileCard({ title, description }) {

    const styles = {
        backgroundColor: "lightgray",
        padding: '15px',
        borderRadius: '8px',
        color: "black"
    };

    return (
        <div
            style={styles}
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProfileCard