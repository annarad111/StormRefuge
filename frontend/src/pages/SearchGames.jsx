import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './SearchGames.css';
import axios from 'axios';
import SearchGameList from './games/SearchGameList';

export default function SearchGames(){
    let [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('search'));
        let searchValue = data.get('search');
        fetchData(searchValue)
    }

    async function fetchData(searchValue) {
    await axios.get(`https://api.rawg.io/api/games?key=d7141a844db24059b91c67a8277b3695&search=${searchValue}`)
        .then(async (response) =>{
          console.log(response.data.results)
          let req = response.data.results
          setSearch(req);
          
        })
        }
    
        // useEffect(() => {
        //     fetchData();
     
        //    },[]);

    return search.length? (

        <>
        <h1>
            Search Games
        </h1>
        <div className='searchbar'>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,width: 500,
                maxWidth: '100%', }}>

              
      <TextField fullWidth label={"Search"} id="search" name="search">
      
      </TextField>
      <SearchIcon />
    </Box>
 
                      
    </div>
    <SearchGameList game={search}/>
        </>
    ):(
        <>
        <h1>
            Search Games
        </h1>
        <div className='searchbar'>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,width: 500,
                maxWidth: '100%', }}>

              
      <TextField fullWidth label={"Search"} id="search" name="search">
      
      </TextField>
      <SearchIcon />
    </Box>
 
                      
    </div>
        </>
    )
}