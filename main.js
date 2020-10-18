$.getJSON("siliconvalley.json", function(json) {
  var siliconvalley = json;
  console.log(siliconvalley);
  
  var scriptedMovie = siliconvalley [0];
  console.log(scriptedMovie);

  console.log( scriptedMovie.show[0].type );
} );