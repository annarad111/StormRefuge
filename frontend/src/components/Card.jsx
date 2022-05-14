import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Games from '../pages/games/Games';

export default function MediaCard(game) {

  // async function goToStore(){
  //   let website = game.game.stores
  // }

  return (
    <Card sx={{ maxWidth: 345 }} key={game.game.name}>
      <CardMedia
        component="img"
        height="250"
        image={game.game.background_image}
        alt="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.game.name}
        </Typography>
        
        { game.game.genres.map((g) => (
         <Typography variant="body2" color="text.secondary">
             {g.name}
        </Typography>

        ))}
                { game.game.stores.map((g) => (
         <Typography variant="body2" color="text.secondary">
             {g.name}
        </Typography>

        ))}
        
      </CardContent>
      <CardActions>
        <Button size="small">Access website</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}