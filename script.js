$(document).ready(function(){

  $("#btn").click(function(){
   var country= $("#input").val()
  
   var url= `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=ec4e99487376c74f6fd3e45041175d57`
  fetch (url,{
    method: "GET"
  })
   .then((response) => response.json())
   .then((response) =>{
    $("#ctr").text(response.name)
    $("#tmp").text(response.main.temp - 273)
    $("#sunrise").text(new Date(response.sys.sunrise).toLocaleTimeString())
    $("#sunset").text(new Date(response.sys.sunset ).toLocaleTimeString())
    $("#desc").text(response.weather[0].description)
  })
    .catch((err) =>  console.log(err))
  }) 
}) 