import React from 'react';
import './styles/ButtonGroup.scss';

const ButtonGroup = (props) => {
    return (
        <article className="group">

            <div className="group__title">{props.title}</div>
            <div className="group__section">

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
