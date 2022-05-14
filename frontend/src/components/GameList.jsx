import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './GameList.css';
import cover from '../images/cover.jpg';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LoadingComponent from './LoadingComponent';


export default function GameList(){
    let [res, setRes] = useState([]);
    let [count, setCount] = useState(1);
    let [page, setPage] = useState(1);


    const handleChange = async (event, value) => {
      setPage(value);
      await fetchData(value)
    };

    async function fetchData(pageCount) {
      setRes([])
      console.log(pageCount)
        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/games?key=f5bc44ee0df541dbb7209a3fc7bc8e70&page=${pageCount}`,
            data: ""
          };
        let response = await axios(
          options
        );
        let req = await response.data;
        setCount(req.count);
        setRes(req.results);
        console.log(req);
      }
    
      useEffect((page) => {
        fetchData(1);
      },[]); 

      
      return res.length ? (
        <>
        <div className='containerimg'>
        <img src={cover} alt="All games" className='coverimg'/>
        </div>
        <div className='gamelist'>
        { res.map((r, index) => (
         <Card game={r} key={r[index]} />
        ))}
        
    </div>
    <div className='pagination'>
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={(count/20).toFixed()} page={page} onChange={handleChange} />
    </Stack>
    </div>
        </>):(
          <LoadingComponent message='Loading products...' />
        )
}