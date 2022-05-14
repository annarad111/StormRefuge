import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './GameList.css';


export default function GameList(){
    let [res, setRes] = useState([]);

    async function fetchData() {
        const options = {
            method: 'GET',
            url: 'https://api.rawg.io/api/games?key=f5bc44ee0df541dbb7209a3fc7bc8e70',
            data: ""
          };
        let response = await axios(
          options
        );
        let req = await response.data;
        setRes(req.results);
        console.log(req);

      }
    
      useEffect(() => {
        fetchData();
      },[]); 



console.log(res)
      
    return(
        <>
        <h1>GameList</h1>
        <div className='gamelist'>
        { res.map((r) => (
         <Card game={r} />
        ))}
    </div>
        </>

    )
}