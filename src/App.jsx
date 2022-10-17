
import { TextField, Box, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'

import './App.css'

function App() {
  const[question,setQuestion]=useState('')

  const reader = (e) =>{
    e.preventDefault();
    console.log(question)
    var config = {
      method: 'get',
      url: 'http://localhost:105/pregunta/'+question,
      headers: { }
    };

    axios(config)
    .then(function (response) {      
      console.log(JSON.stringify(response.data));
      setQuestion(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
    
    axios(config)
    .then(function (response) {
       console.log(JSON.stringify(response.data));
     })
    .catch(function (error) {
        console.log(error);
    });  
  }
  
  return (
    <div className="App">
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}></Box>
      <TextField
          id="outlined-multiline-static"
          label="Pregunta"
          multiline
          rows={4}
          fullWidth
          variant='filled'
          onChange={(e) => setQuestion(e.target.value)}
          value= {question}
        ></TextField>
        <p></p>
        <Button onClick={reader}>
          Preguntar
        </Button>
    </div>
  )
}

export default App
