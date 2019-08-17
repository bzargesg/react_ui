const express = require('express')
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios');
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json());
app.post('/api/oauth/redirect', (req, res)=> {
  const requestToken = req.body.requestToken;
  axios({
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    method: 'POST',
    headers: {
      accept: 'application/json'
    }
  }).then((response)=>{
    // console.log(response.data)
    const accessToken = response.data.access_token;
    // fetch(`https://api.github.com/applications/${clientID}/tokens/${accessToken}`, {
    //   method: 'get'
    // })
    // .then(response=>{
    //   console.log(response.status)
    // })
    // fetch('https://api.github.com/user', {
    //   headers: {
    //     Authorization: 'token ' + accessToken
    //   }
    // }).then(res=> res.json())
    // .then(res=>{
    //   console.log(res);
    // })
    res.json(accessToken);
  })
})
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
})


app.use(express.static(path.join(__dirname, '/build')));


app.listen(8000,()=>{
  console.log('Listening on port 8000');
})