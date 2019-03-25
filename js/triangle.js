function denilson(){
  var side1= parseInt(document.getElementById('First Number').value);
  var side2= parseInt(document.getElementById('Second Number').value);
  var side3 =parseInt(document.getElementById('Third Number').value);
  var triangle = function(a, b, c,){
    return a+b>c && b+c>a && c+a>b
  }
if (triangle(side1,side2,side3,) && side1===side2 &&side2===side3) {
  alert("equilateral triangle")
}
else if (triangle(side1,side2,side3,) && side1!=side2 &&side2!=side3 && side3!=side1){
  alert("scalene triangle")
}
else if (triangle(side1,side2,side3,) && side1===side2||side3===side1||side2===side3){
  alert("isoscles triangle")
}
else{
  alert ("not a triangle")
}



}
