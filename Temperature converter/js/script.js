document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = clearForm;

// If the value is not a valid number, clear the input
function validateNumber(input) {
  var value = input.value;
  if (isNaN(value)) {
    input.value = "";
  }
}

function tempConvert() {
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = document.getElementById("celsius").value;

  if (fahrenheit != "") {
    celsius = (parseFloat(fahrenheit) - 32) / 1.8;
  } else {
    fahrenheit = parseFloat(celsius) * 1.8 + 32;
  }

  document.getElementById("fahrenheit").value =  fahrenheit + " F";
  document.getElementById("celsius").value = celsius + " C";
}

function clearForm() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
}
