import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function MediaCard(game) {

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
         <Typography variant="body2" color="text.secondary" key={g.id}>
             {g.name}
        </Typography>

        ))}

        
      </CardContent>
      <CardActions>
      <Button component={Link} to={`/games/${game.game.slug}`} size="small">Learn more</Button>
      </CardActions>
      <div className='addanddelete'>
      <Button variant="contained" >Add to list</Button>
      <Button variant="contained">Delete from list</Button>
      </div>
    </Card>
  );
}