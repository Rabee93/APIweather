const express = require("express");
const https = require("https");
const app = express();




app.get("/", function(req,res) {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=a2c9a5fb7e2a6b62bc8c80f26ed990f4'

  https.get(url, function(response){

    response.on("data", function(data){
      const parsedData = JSON.parse(data)
      const weatherDescription = parsedData.weather[0].description
      console.log(weatherDescription)
    })


  })
res.send('server up and running')
})


app.listen(3000, function(){
console.log('server is running')
})
