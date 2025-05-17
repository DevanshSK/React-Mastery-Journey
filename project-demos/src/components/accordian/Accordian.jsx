import React, { useState } from 'react'
import "./index.css";

const Accordian = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);


    return (
        <section className='accordion-card' key={Math.random()}>
            <div className="header" onClick={() => setIsActive(p => !p)}>
                <div>{title}</div>
                <p className="icon">{isActive ? "-" : "+"}</p>
            </div>

            <div className="content">
                {isActive && <p className='card-info'>{content}</p>}
            </div>
        </section>
    )
}

export default Accordian