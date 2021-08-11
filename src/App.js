// import React, { Component } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App () {
    const [message, setMessage] = useState ("");
    const api = 'https://1zwn6mu9jg.execute-api.ap-southeast-2.amazonaws.com/staging';
    const data = { "name" : "World" };

    useEffect (() => {
      axios
      .post(api, data)
      .then((response) => {
        
        setMessage(response.data);
        console.log(response);
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [])

    return (
      <div>{message}</div>
    );

}
export default App;
