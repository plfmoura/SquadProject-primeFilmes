import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from './filmesCard.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function FilmesCard({ title, image, preco, onPress }) {
    return (
<Card  
    sx={{ 
        width: 220, 
        height: 300, 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between",
        margin: '10px',
        font: 'strong'
        
    }}
    className={style.homeCard}>
    <CardMedia //Isso é a imagem
        sx={{ height: 180 }}
        image={image}
    />
    <CardContent>
        <Typography gutterBottom variant="h6" component="div" className={style.titleCard}>
            {title} {/* Nome do filme */}
        </Typography>
    
        <Typography variant="body" color="black">
        R$ {preco} {/* Aqui é o preco */}
        </Typography>
    </CardContent> 
    <div className={style.cartIcon}>
        <AddShoppingCartIcon className={style.btn} onClick={onPress} />
    </div>
</Card>
    )}