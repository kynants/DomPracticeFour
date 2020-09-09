function getAttributes() {
  // Grabs the values of the anchor tag
  var values = document.getElementsByTagName("A")[0];

  // SECOND ATTEMPT
  values.forEach(iterator);
  function iterator(item, index) {
    document.getElementById("output").innerHTML += index + ":" + item + "<br>";
  }
}