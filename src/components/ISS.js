import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import issImage from '../ISS.jpeg';

// API call
// Store all in data array

const ISSInfo = (props) => {
    const [ISSData, setISSData] = useState({});
    const [country, setCountry] = useState({});


    useEffect(() => {
        getData();
        getWeatherData();
        const interval = setInterval(() => {
            getData();
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const getData = () => {
        axios
            .get('https://api.wheretheiss.at/v1/satellites/25544')
            .then((res) => {
                setISSData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log('error', error);
            })
        // Error handling
    };



    const getWeatherData = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=40.530&lon=-72.349&appid=4012d3b5794dee1651873924836c5fac`)
            .then((res) => {
                setISSData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log('error', error);
            })
    };

    return (
        <div style={{
            backgroundColor: 'grey', display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={issImage} alt="Logo" style={{}} />
            <p>The {ISSData.name} is currently at:</p>
            <p>Latitude: {ISSData.latitude}, Longitude: {ISSData.longitude}</p></div>
    );
}

export default ISSInfo;