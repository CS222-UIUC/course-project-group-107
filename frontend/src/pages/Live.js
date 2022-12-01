
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FF5F05',
  ...theme.typography.body2,
  padding: theme.spacing(8),
  textAlign: 'center',
  fontSize: 24,
  color: theme.palette.text.secondary,
}));

export default function Live() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>SWIMMING POOL: 38 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>MAIN GYM: 140 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>BASKETBALL COURTS: 78 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>ROCK CLIMBING: 16 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>TRACK: 21 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>KITCHEN: 5 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>LOWER LEVEL GYM: 42 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>UPPER LEVEL GYM: 26 people
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>SAUNA: 12 people
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}