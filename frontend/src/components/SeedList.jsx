import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import './SeedList.css';
import cover from '../images/cover.jpg';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LoadingComponent from './LoadingComponent';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';


export default function SeedList(){
    let [res, setRes] = useState([]);
    let [count, setCount] = useState(1);
    let [page, setPage] = useState(1);
    let dataArr = [];



    const handleChange = async (event, value) => {
      setPage(value);
      await fetchData(value)
    };

    async function fetchData(pageCount) {
      setRes([])
        await axios.get(`https://api.rawg.io/api/games?key=d7141a844db24059b91c67a8277b3695&page=${pageCount}`)
        .then(async (response) =>{
          console.log(response.data)
          let req = response.data
          setCount(req.count);
          setRes(req.results);
          
          req.results.forEach(async (id) =>{
            console.log(id.id)
            await axios
          .get("https://api.rawg.io/api/games/" + id.id +"?key=d7141a844db24059b91c67a8277b3695&/")
          .then(async (res) => {
              dataArr.push(res.data)
              seedData();
            })
          
          })
          
        })
      }


      useEffect(() => {
       fetchData(1);

      },[]);

      async function seedData(){
        console.log('aici')
          dataArr.forEach((element) => {
            console.log('am intrat')
            console.log(element);
          
          axios.post('https://localhost:5000/api/Data/addnewgame', {
            id: element.id,
            background_image: element.background_image,
            playtime: element.playtime,
            // // genre: element.genre,
            metacritic: element.metacritic,
            // // platforms: element.platforms,
            rating: element.rating,
            ratings_count: element.ratings_count,
            released: element.released,
            // // short_screenshots: element.short_screenshots,
            name: element.name,
            // // stores: element.stores,
            // // tags: element.tags,
            description: element.description,
            // // developers: element.developers,
            game_series: 2,
            website: element.website
            })
            console.log(element)
          })
        console.log('am iesit')
      }

      
      return res.length ? (
        <>
        <div className='gradient' id="top">
          <p className='spacegradient'></p>
        </div>
        <div className='containerimg'>
        <img src={cover} alt="All games" className='coverimg'/>
        </div>
        <div className='sticky'>
    <Fab variant="extended" className='navigationtop'>
        <a href='#topgames'><NavigationIcon sx={{ mr: 1 }} />Go Top</a>
      </Fab>
      </div>

        <div className='gamelist' id='topgames'>
        { res.map((r, index) => (
         <Card game={r} key={r[index]} />
        ))}

    </div>

    <div className='pagination'>
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <button onClick={() => seedData()}>seed!</button>

      <Pagination count={(count/20).toFixed()} page={page} onChange={handleChange} />
    </Stack>
    </div>
        </>):(
          <LoadingComponent message='Loading ...' />
        )
}