import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <ImageList sx={{ width: 1900, height: 1350 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">ACTIVITIES AND RECREATION CENTER AREAS</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.area}
            subtitle={item.desc}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Link to="/Live">
                <InfoIcon />
                </Link>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2022/09/StrengthandConditioning-1-1536x1024.jpeg',
    area: 'Main Strength and Conditioniong Zone (19,219 sq ft)',
    desc: 'Free weights with rubber floor, selectorized weight equipment, power racks, indoor turf, lockers',
  },
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2022/09/Strength-1536x1026.jpg',
    area: 'Upstairs Strength and Conditioning Areas (34,000 sq ft)',
    desc: 'Free weights with carpet, cardio/selectorized weight equipment, lockers',
  },
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2019/03/ARC_19_ACP_Pool-I-01.jpg',
    area: 'Indoor Swimming Pool (22,907 sq ft; 50M x 25yds)',
    desc: 'Diving well, sauna, wet meeting room, safety lifeguard center, lap swimming, club activities, varsity women’s swimming/diving',
  },
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2019/06/ACP_1843.jpg',
    area: 'Outdoor Pool (36,058 sq ft; 50M; 4 lanes)',
    desc: 'Diving well, sun deck, lounge area, swim lanes, safety lifeguard center',
  },
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2022/09/Gym1-scaled.jpg',
    area: 'Gym 1 (35,780 sq ft)',
    desc: '5 basketball or 7 volleyball courts, 1 MAC gym, day lockers',
  },
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2022/09/Gym3-scaled.jpg',
    area: 'Gym 2 & 3 (14,859 and 15,012 sq ft, respectively)',
    desc: 'Each has 2 basketball or 3 volleyball courts, 2 scoreboards, day lockers',
  },
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2022/09/ClimbingWall-scaled.jpg',
    area: 'Climbing Wall',
    desc: 'Rock climbing wall, 35.5 ft tall',
  },
  {
    img: 'https://campusrec.illinois.edu/wp-content/uploads/2022/09/Track-scaled.jpg',
    area: 'Walking/Jogging Track',
    desc: '5 laps per mile, 3 lanes, mondo surface',
  },
];

