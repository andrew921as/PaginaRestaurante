import React, { useState } from 'react';
import './styles/ButtonGroup.scss';

const ButtonGroup = (props) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <article className="group">
            <div className="group__title" onClick={() => setIsActive(!isActive)}> {props.title}</div>
            <div className={`group__section ${isActive && "active"}`}>

                { props.sedes.map((sede) => {
                    return <a href={sede.link} target="_blank" rel="noreferrer" className="group__circle">
                                <img src={sede.img} alt="Karen Pizza" />
                                <div className="details">
                                    <h2>{sede.name}</h2>
                                </div>
                            </a>
                }) }
            </div>
        </article>
    )
}

export default ButtonGroup
