$.getJSON("siliconValley.json", function(json) {
  var siliconValley = json;
  console.log(siliconValley);
  
  var movieType = siliconValley [2][4];
  console.log(movieType);

var col = [];
  for (var i = 0; i < myBooks.length; i++) {
    for (var key in myBooks[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
}