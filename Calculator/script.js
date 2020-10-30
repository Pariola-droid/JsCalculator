function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	if (num.lenght > 10) {
		num = num.substr(0, 10);
		alert("its too much!");
	}
	
	  // to check whether a dot is placed just a the end of num like 6.
  let lastIndexOfDot  = num.toString().lastIndexOf(".") ; 
  let isDotted  =lastIndexOfDot  == false ? false: lastIndexOfDot == num.length-1 ? true : false ; 

  var n =  Number(num); 

  if (n === "Infinity") {
    value = "0";
    alert("Error");
  } else {
    var value = n.toLocaleString("en");
  }
   // if dotted is true then value has a dot at the end like : 5. so we return value  with its dot 
   if (isDotted ) return value +"." ; 

   return value;  // no dot at the end 
}

function reverseNumberFormat(num){
	  return num.replace(/,/g, "");  // => Nb: conversion not necessary
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());

    if (output != NaN ) {
      output += this.id;  
      // CHECK HERE IF output is already a valid decimal number 
      let matchCount = output.match(/\./g) ;
    
      if( matchCount && matchCount.length > 1 ) return  ; // => already decimal number 
      printOutput(output);
   }

 });
}
