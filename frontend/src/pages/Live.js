
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
  fontSize: 21,
  color: theme.palette.text.secondary,
  
}));


export default function Live() {
  
 

  const [Areas, setAreas] = useState([])
  
  
  
  useEffect(() => {
  
    axios.get('http://127.0.0.1:8000/App/api/arcdatacsv/').then((response) => {
       setAreas(response.data);
    })
  

 }, []);
  
  
  return (
    
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <Item>
          <div>
             
            { Areas[0]?.area_name }: {Areas[0]?.capacity}/60 ({ Math.round(((Areas[0]?.capacity / 60) * 100))})%
          </div>
        </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[1]?.area_name }: {Areas[1]?.capacity}/100 ({ Math.round(((Areas[1]?.capacity / 100) * 100))})%
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[2]?.area_name }: {Areas[2]?.capacity}/50 ({ Math.round(((Areas[2]?.capacity / 50) * 100))})%
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[3]?.area_name }: {Areas[3]?.capacity}/25 ({ Math.round(((Areas[3]?.capacity / 25) * 100))})%

          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[4]?.area_name }: {Areas[4]?.capacity}/20 ({ Math.round(((Areas[4]?.capacity / 20) * 100))})%

          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[5]?.area_name }: {Areas[5]?.capacity}/15 ({ Math.round(((Areas[5]?.capacity / 15) * 100))})%

          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
        
          { Areas[6]?.area_name }: {Areas[6]?.capacity}/50 ({ Math.round(((Areas[6]?.capacity / 50) * 100))})%

          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[7]?.area_name }: {Areas[7]?.capacity}/50 ({ Math.round(((Areas[7]?.capacity / 50) * 100))})%

          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div>
          
          { Areas[8]?.area_name }: {Areas[8]?.capacity}/15 ({ Math.round(((Areas[8]?.capacity / 15) * 100))})%

          </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}