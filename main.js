$.getJSON("siliconValley.json", function(json) {
  var siliconValley = json;
  console.log(siliconValley);
  
  var scriptedMovie = siliconValley [0];
  console.log(scriptedMovie);

$( "body" ).append( "<h1>" + scriptedMovie.score[ 0 ] + "</h1>" );
} );