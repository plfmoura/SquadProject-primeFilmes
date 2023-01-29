import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from './card.module.css'

export default function HomeCard({ title, sub, image }) {
  return (
    <Card sx={{ width: 220, height: 300, display: "flex", flexDirection: "column", justifyContent: "space-between"}} className={style.homeCard}>
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
    </Card>
  );
}