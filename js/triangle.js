function denilson(){
  var adjacent= parseInt(document.getElementById('First Number').value);
  var hypotenuse= parseInt(document.getElementById('Second Number').value);
  var opposite =parseInt(document.getElementById('Second Number').value);
  if (adjacent===hypotenuse&&hypotenuse===opposite){
    alert("EQUILATERAL TRIANGLE")
  }
  else if(adjacent===opposite||opposite===hypotenuse||hypotenuse===adjacent){
    alert("ISOSCLES TRIANGLE")
  }
  else if (adjacent!==opposite&& adjacent+opposite<hypotenuse||hypotenuse+opposite<adjacentt){
    alert("SCALENE TRIANGLE")
  }
  else if (adjacent+hypotenuse<=opposite||hpotenuse +opposite<=adjacent||adjacent+opposite<=hypotenuse){
    alert('NOT A TRIANGLE')
  }
  else{}



}
