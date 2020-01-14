var input = document.getElementById('autocomplete');
var autocomplete = new google.maps.places.Autocomplete(input, { types: ['(cities)'] });
google.maps.event.addListener(autocomplete, 'place_changed', function () {
  var place = autocomplete.getPlace();
   console.log(place.photos[0].html_attributions[0]);
   console.log(place);


})

// $("button").on("click", function () {
//     var city = $("input").val().split();
//     $('#myTable').append('<tr><th>my data</td><td>more data</td></tr>');



// })
$("button").click(function(){ 
    var city = $("input").val().split();
    console.log(city)
    $("row1").prepend(city[0]);

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=f299017fc79bef68bd06401cc604c72e";


$.ajax({
    url: queryURL,
    method: "GET"
  })

    // After the data from the AJAX request comes back
    .then(function (response) {
      console.log(response);
      var temperatureCelvin = [response.main.temp, response.main.feels_like, ];
      var temperature = (temperatureCelvin[0] -273.15) * 9/5 + 32;
      temperature = Math.round(temperature);
      var temperatureFeelsLikeF = (temperatureCelvin[1]-273.15) * 9/5 + 32;
      temperatureFeelsLikeF= Math.round(temperatureFeelsLikeF);
      
      
      var wheatherImage = $("<img>");
      wheatherImage.attr("src", "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cloudy-sky.jpg?itok=FDxeE-I5");
      $(".box").prepend(wheatherImage);


      var TextHeader = "Wheather info:"
      $(".wheatherInfo").prepend(city);


      $(".temperature").prepend(temperature + "°F");
      
      $(".feelsLike").prepend("Feels like: " +temperatureFeelsLikeF + "°F");

      
    
    });

});



// function updateCities() {
      
//     var guesses2 = document.getElementById("user-guess").value;
//     console.log(guesses2)
//     userLetter.push(guesses2);
//      document.querySelector("#guessSoFar").innerHTML = "Guesses so far: " + userLetter.join(' ');
     
//   }

//   function reset() {
      
//     document.getElementById('user-guess').value=null;

     
//   }
