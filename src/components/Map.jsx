import React from 'react';
import './styles/Map.scss';


const Map = () => {

    const BogotaMap = () => {
        var mapG = document.getElementById("MapG");
        mapG.src = "https://www.google.com/maps/d/u/0/embed?mid=1Iwk37kxdUuNiTx0YtZTSmxALiCkMMhaD";
    }

    const CaliMap = () => {
        var mapG = document.getElementById("MapG");
        mapG.src = "https://www.google.com/maps/d/u/0/embed?mid=165J5dshWMXtkxTkI3MNUtzh2hH-YZl14"
    }

    const PalmiraMap = () => {
        var mapG = document.getElementById("MapG");
        mapG.src = "https://www.google.com/maps/d/u/0/embed?mid=11wpCFmQZcsQ1mObI98RKit8y8YvYWqie"
    }
    
    return (
        <div className="allC">
            <div className="row">

                <div className="cityBorder">
                    <div className="title">
                        <p>PUNTOS DE VENTA</p>
                    </div>
                    <div className="cityButtons">
                        <ul>
                            <li><button type="button" className="buttonBogota" onClick={BogotaMap}><b>BOGOTÁ</b></button></li>
                            <li><button type="button" className="buttonCali" onClick={CaliMap}><b>CALI</b></button></li>
                            <li><button type="button" className="buttonPalmira" onClick={PalmiraMap}><b>PALMIRA</b></button></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <iframe id="MapG" title="Map" src="https://www.google.com/maps/d/embed?mid=1mSF3C_QFZ1I68nXmfo47y7ZCGM06dFhR" width="640" height="480"></iframe>
                </div>

            </div>
        </div>
    )
}

export default Map