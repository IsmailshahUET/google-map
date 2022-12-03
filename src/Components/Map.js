import React, {useState, useRef, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import useSuperCluster from 'use-superclustor';

function Map({center, eventData}) {


    const [zoom, setZoom] = useState(1);
    return (
        <div className='map-container'>
            <GoogleMapReact bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY}}
            center={center}
            zoom={zoom}>
            </GoogleMapReact>
            
        </div>
    );
}

Map.defaultProps ={
    center: {
        lat: 29.35353,
        lng: -3.56343,
    }
}

export default Map;