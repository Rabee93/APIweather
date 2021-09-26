const express = require("express");
const https = require("https");
const bodyParser = require ("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html")
});
app.post("/", function(req,res) {

  const query = req.body.cityName
  const apiKey = "a2c9a5fb7e2a6b62bc8c80f26ed990f4"
  const unit = "metric"

  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ query +'&units='+ unit +'&appid='+ apiKey

  https.get(url, function(response){

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const city = weatherData.name
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<h1>The tempreture in " + city + " is " + temp + " degrees celcius. </h1>")
      res.write("<h1>The weather condition is " + weatherDescription+ " today </h1>")
      res.write("<img src="+imageUrl+ ">")
      res.send()
  })
  })

})



app.listen(3000, function(){
console.log('server is running')
})
