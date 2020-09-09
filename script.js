function getAttributes() {
  // Grabs the values of the anchor tag
  var values = document.getElementsByTagName("A")[0];

  // FORTH ATTEMPT
  // https://stackoverflow.com/questions/828311/how-to-iterate-through-all-attributes-in-an-html-element
  for (var i = 0; i < values.attributes.length; i++) {
    var attrib = values.attributes[i];
    document.getElementById("output").innerHTML = attrib.name + ": " + attrib.value + "<br>";
    console.log(attrib.name + ": " + attrib.value);
  }
}