function getAttributes() {
  // Grabs the values of the anchor tag
  var values = document.getElementsByTagName("A")[0];

  // FIRST ATTEMPT
  // Placeholder for output paragraph
  var outputVar = "";
  // Loops through the anchor tags property values
  for (var property in values) {
    outputVar += values[property] + "<br>";
  }
  // Spits out the values of the anchor tag through the "value" variable
  document.getElementById("output").innerHTML = values;
}