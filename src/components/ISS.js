import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import issImage from '../ISS.jpeg';

// API call
// Store all in data array

const ISSInfo = (props) => {
    const [roverData, setRoverData] = useState({});


    useEffect(() => {
        getData();
        const interval = setInterval(() => {
            getData();
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const getData = () => {
        axios
            .get('https://api.wheretheiss.at/v1/satellites/25544')
            .then((res) => {
                setRoverData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log('error', error);
            })
        // Error handling
    };

    return (
        <div style={{
            backgroundColor: 'grey', display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={issImage} alt="Logo" style={{}} />
            <p>The {roverData.name} is currently at:</p>
            <p>Latitude: {roverData.latitude}, Longitude: {roverData.longitude}</p></div>
    );
}

export default ISSInfo;