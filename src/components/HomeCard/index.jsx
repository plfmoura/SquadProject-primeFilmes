import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from './card.module.css'

export default function HomeCard({ title, sub, image }) {
  return (
    <Card sx={{ width: 220, height: 320, display: "flex", flexDirection: "column", justifyContent: "space-between"}} className={style.homeCard}>
      <CardMedia
        sx={{ height: 180 }}
        image={ image }
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className={style.titleCard}>
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { sub }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}