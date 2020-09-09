function getAttributes() {
  // Grabs the values of the anchor tag
  var values = document.getElementsByTagName("A")[0];

  // THIRD ATTEMPT
  values.forEach(element => console.log(element));
}