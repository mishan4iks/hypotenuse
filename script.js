var answer=document.getElementById("answer");
var result;
btn_answer.onclick=function(){
	var first=+document.getElementById("first").value;
	var second=+document.getElementById("second").value;
	result=Math.round(Math.sqrt((first*first)+(second*second)));
	answer.innerHTML="Гипотенуза равна "+result;
}