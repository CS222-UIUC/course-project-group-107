
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import axios from 'axios'
import { useState, useEffect } from 'react'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FF5F05',
  ...theme.typography.body2,
  padding: theme.spacing(8),
  textAlign: 'center',
  fontSize: 24,
  color: theme.palette.text.secondary,
  
}));


export default function Live() {
  
  // const article = { area_name: "MAIN GYM"};
  //         console.log(article);
  //           axios.get('http://127.0.0.1:8000/App/api/arcdatacsv/Live/', article, {
  //             headers: {
  //               'Content-Type': 'application/json'
  //             }
  //           })
  //             .then(response => console.log(response.data)).catch((error) => console.log( error.response.request._response ) );

  const [Areas, setAreas] = useState([])
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
  
    axios.get('http://127.0.0.1:8000/App/api/arcdatacsv/').then((response) => {
       setAreas(response.data);
    }).catch(setError());
  

 }, []);
  

  return (
    
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          
        
          
        <Item>
          
          <div>
            {/* if (Areas[0] != null && Areas.length != 0) */}
            { Areas[0]?.area_name } : { Areas[0]?.capacity }

          </div>
          
          
        </Item>
      
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[1]?.area_name } : { Areas[1]?.capacity }
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[2]?.area_name } : { Areas[2]?.capacity }
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[3]?.area_name } : { Areas[3]?.capacity }
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[4]?.area_name } : { Areas[4]?.capacity }
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[5]?.area_name } : { Areas[5]?.capacity }
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[6]?.area_name } : { Areas[6]?.capacity }
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[7]?.area_name } : { Areas[7]?.capacity }
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[8]?.area_name } : { Areas[8]?.capacity }
          </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}