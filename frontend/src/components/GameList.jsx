import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './GameList.css';
import cover from '../images/cover.jpg';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function GameList(){
    let [res, setRes] = useState([]);
    let [page, setPage] = useState('1');
    const handleChange = async (event, value) => {
      setPage(value);
      await fetchData(page)
    };
    console.log(page)

    async function fetchData(page) {
        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/games?key=f5bc44ee0df541dbb7209a3fc7bc8e70&page=${page}`,
            data: ""
          };
        let response = await axios(
          options
        );
        let req = await response.data;
        setRes(req.results);
        console.log(req);
      }
    
      useEffect((page) => {
        fetchData(1);
      },[]); 



console.log(res)
      
    return(
        <>
        <div className='containerimg'>
        <img src={cover} alt="All games" className='coverimg'/>
        </div>
        <div className='gamelist'>
        { res.map((r) => (
         <Card game={r} />
        ))}
        
    </div>
    <div className='pagination'>
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
    </div>
        </>

    )
}