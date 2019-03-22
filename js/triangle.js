function denilson() {
var length1 = document.getElementById("adjacent").value;
var length2 = document.getElementById("hypotenuse").value;
var length3 = document.getElementById("opposite").value;
var adjacent= parseInt("length1")
var hypotenuse= parseInt("length2")
var opposite =parseInt("length3")
var sides=[adjacent,hypotenuse,opposite,]
var type=['equilateral triangle','isoscles triangle','scalene triangle']
if (adjacent===hypotenuse&&hypotenuse===opposite){
  var FirstNumber=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[3];
      document.getElementById("deno").innerHTML=FirstNumber;
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
