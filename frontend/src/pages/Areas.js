
import axios from "axios"
import React, { useState, useEffect } from 'react';
const Areas = () => {
    const [areas, setAreas] = useState([]);
useEffect(() => {
    fetchAreas();
}, []);

const fetchAreas = () => {
    axios
      .get('http://127.0.0.1:8000/App/api/arcdatacsv/Live/')
      .then((res) => {
        console.log(res);
        setAreas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    areas.capacity
  )
};

// const fetchArea() = () => {

// }
