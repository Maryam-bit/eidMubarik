var inp = document.getElementById('name')
var sname = document.getElementById("stdName")
var main_c= document.getElementById("maindiv")
var greeting = document.getElementById("greet")
var mainresult = document.getElementById("mainresult")
var sign = document.getElementById("sign")

// function go(){
// if(inp.value == ""){ 
    // alert("enter your name")
// }
// else{
    // location = 'index1.html'
// }
// }
var result = document.getElementById('result')
var yourName = document.getElementById('yourName')
var bak = document.getElementById('back')

function next() {
  if(inp.value == ""){
      alert("please enter your name")
  return;
  }

  main_c.style.display ="none"
bak.style.display= ''

result.style.display = ''
sign.style.display = ''
mainresult.style.display = ''
yourName = result.textContent = inp.value;
greeting.style.display = ''

return;
}
function goback() {
    location = 'index.html'
}