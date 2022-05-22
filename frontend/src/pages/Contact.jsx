// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// export default function Contact(){
//     let [res, setRes] = useState([]);

//     async function fetchData() {
//         setRes([])
//         axios.post('https://localhost:5000/api/Account/login', {
//             username: data.get('username'),
//             password: data.get('password'),
//             })
//             .then(function (response) {
//               console.log(response);
//               navigate('/');
//             })
//             .catch(function (error) {
//               alert('This account does not exist');
//               console.log(error);
//             });
//           console.log({
//             email: data.get('email'),
//             password: data.get('password'),
//           });
//         }

//         useEffect(() => {
//             fetchData();
//           },[]); 
      


//     return(
//     <>
//     <h1>Contact us</h1>
//     </>
//     )
// }