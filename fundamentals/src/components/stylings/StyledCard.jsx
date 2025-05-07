

function StyledCard({title, description}) {
  return (
    <div
        style={{
            backgroundColor: "lightblue",
            padding: '20px',
            borderRadius: '30px',
            color: 'darkblue',
            margin: '20px'
        }}
    >
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default StyledCard