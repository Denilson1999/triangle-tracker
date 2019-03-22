function denilson(){
  var adjacent= prompt("enter length1")
  var hypotenuse= prompt ("enter length2")
  var opposite =prompt ("enter length3")
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
