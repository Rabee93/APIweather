const express = require("express");
const https = require("https");
const app = express();




app.get("/", function(req,res) {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=a2c9a5fb7e2a6b62bc8c80f26ed990f4&units=metric'

  https.get(url, function(response){
    console.log(response);

  })
res.send('server up and running')
})


app.listen(3000, function(){
console.log('server is running')
})
