import axios from "axios";

export default function GameList(){


    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://api.rawg.io/api/games?key=f5bc44ee0df541dbb7209a3fc7bc8e70',
      body: {
          response,
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


      const listGames = response.map((r) => <li key={r.name}>{r.name}</li>);


      
    return(
        <>
        <h1>GameList</h1>
        <ul>
            {/* {listGames} */}
        </ul>
        </>

    )
}