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
        //getWeatherData();
        const interval = setInterval(() => {
            getData();
            //getWeatherData();
        }, 5 * 1000);
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
    };

    const getWeatherData = () => {
        axios
            .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${ISSData.latitude},${ISSData.longitude}&key=AIzaSyDh3_hpjYakleyfu0FTOxW8aQ81kAmO6g8`)
            .then((res) => {
                setCountry(res.data);
                console.log(``);
            }).catch((error) => {
                console.log('error', error);
            })
    };



    return (
        <div style={{
            backgroundColor: 'grey', display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <img src={issImage} alt="Logo" className='ISS-image' />
            <p>The {ISSData.name} is currently at:</p>
            <p>Latitude: {ISSData.latitude}, Longitude: {ISSData.longitude}</p>

        </div>
    );
}

export default ISSInfo;