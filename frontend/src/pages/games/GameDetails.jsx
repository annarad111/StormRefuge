

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './GameDetails.css'
import InteractiveList from '../../components/InteractiveList';
import LoadingComponent from '../../components/LoadingComponent';

export default function GameDetails(){

    let [res, setRes] = useState([]);
    let [loading, setLoading] = useState(true);
    const params= useParams();
    const id = params.slug;

    async function fetchData(StormRefuge) {

      await axios
        .get("https://api.rawg.io/api/games/" + id +"?key=f5bc44ee0df541dbb7209a3fc7bc8e70&/")
        .then((res) => {
          if (res && res.data) {
            setRes(res.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    
      console.log(res)

      useEffect(() => {
       fetchData();
      },[]); 

      return !loading ? (
        <>
        <p className='gametitles'>{res.name}</p>
        <div className='detailedcontainer'>
        <h1 className='gametitle'>{res.name}</h1>
            <div>
            <img src={res.background_image} className='detailedimg' alt="All games"/>
            </div>
            {/* <div className='description'>
                {res.description_raw}
            </div> */}
            <div className='listdiv'>
            <InteractiveList props={res}></InteractiveList>
            </div>
        </div>
        </>
    ):(
      <LoadingComponent message='Loading products...' />
    )
}