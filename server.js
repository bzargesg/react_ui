const express = require('express')
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const jwt = require('jsonwebtoken')
const clientID= 'bd29131b5dddb07d4258'
const clientSecret = '60161b4ceaa86cb6784035f6bafed1ca2ef19711';

const PORT = process.env.PORT || 8000;

const app = express()
app.use(bodyParser.json());


// passport.use(new GitHubStrategy({
//   clientID: 'bd29131b5dddb07d4258',
//   clientSecret: '60161b4ceaa86cb6784035f6bafed1ca2ef19711',
//   callbackURL: 'http://localhost:8000'
// },
// function(accessToken, refreshToken, profile, cb) {
//   User.findOrCreate({githubID: profile.id}, function(err,user){
//     if(err) {
//       console.log(err);
//     }
//     if(!err && user !== null){
//       cb(null, user)
//     } else{
//       user = new User({
//         githubID: profile.id,
//         name: profile.displayName,
//         created: Date.now()
//       });
//       user.save(function(err){
//         if(err) {
//           console.log(err);
//         } else {
//           console.log('saving user');
//           done(null,user);
//         }
//       })
//     }
//   })
// }
// ));

// function ensureAuth(req, res, next) {
//   if(req.isAuthenticated()) { return next(); }
//   console.log("Not Authenticated", req.user);
//   res.redirect('/');
// }



// app.get('/api/oauth/redirect',
//     passport.authenticate('github'),
//     function(req,res){res.end()});
// app.get('/auth/github/callback',
//       passport.authenticate('github', { failureRedirect: '/'}),
//       function(req, res) {
//         console.log('post')
//           res.redirect('/');
//       })
// app.post('/api/oauth/redirect',
//     passport.authenticate('github'),
//     function(req,res){
//       const token = jwt.sign({user}, 'secret', {expiresIn: 60 * 60})
//     }
//    );


app.post('/api/oauth/redirect',
 (req, res)=> {
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


app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
})