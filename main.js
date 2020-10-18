$.getJSON("siliconValley.json", function(json) {
  var siliconValley = json;
  console.log(siliconValley);
  
  var scriptedMovie = siliconValley [0];
  console.log(scriptedMovie);

  console.log( scriptedMovie.show[0]."type" );
} );