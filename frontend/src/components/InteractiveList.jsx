import React, {  useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import axios from 'axios';



function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList(props) {

  const [value, setValue] = React.useState(2);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  
  async function postData(){
    console.log(props)
    await axios.post('https://localhost:5000/api/Data/addnewgame', {
            id: props.props.id,
            background_image: props.props.background_image,
            playtime: props.props.playtime,
            // // genre: element.genre,
            metacritic: props.props.metacritic,
            // // platforms: element.platforms,
            rating: props.props.rating,
            ratings_count: props.props.ratings_count,
            released: props.props.released,
            // // short_screenshots: element.short_screenshots,
            name: props.props.name,
            // // stores: element.stores,
            // // tags: element.tags,
            description: props.props.description,
            // // developers: element.developers,
            game_series: 2,
            website: props.props.website
            })
  }

          useEffect(() => {
            postData();
           },[]);
  



  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            Description
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary={props.props.description_raw}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            General Information
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={props.props.rating}
                    
                    secondary={secondary ? 'Secondary text' : null}
                  />
                   <Rating
        name="simple-controlled"
        value={props.props.rating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}  />

                </ListItem>,
              )}
              <ListItem>Developers:
              { props.props.developers.map((p) => (
            <Typography> {p.name}</Typography>
           ))}
              </ListItem>
              <ListItem>
                  <Typography>
                      Release date : {props.props.released}
                  </Typography>
              </ListItem>
              <ListItem>
                  <a href={props.props.website}>
                      Website : {props.props.website}
                  </a>
              </ListItem>
              <ListItem>
                  <Typography>
                      Game series : {props.props.game_series_count}
                  </Typography>
              </ListItem>
              <ListItem>
                  <Typography>
                      Average playtime : {props.props.playtime} hours
                  </Typography>
              </ListItem>
              <ListItem>
                  <Typography>
                      Reddit description : "{props.props.reddit_description}"
                  </Typography>
              </ListItem>
              <ListItem>
                  <Typography>
                      Twitch count : {props.props.twitch_count}
                  </Typography>
              </ListItem>
              <ListItem>
                  <Typography>
                      Yotube count : {props.props.youtube_count}
                  </Typography>
              </ListItem>
              <ListItem>
                  <Typography>
                      Reddit count : {props.props.reddit_count}
                  </Typography>
              </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
