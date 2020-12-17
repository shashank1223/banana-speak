
var btntranslate=document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);
var outputDiv= document.querySelector("#output")


btntranslate.addEventListener("click",function clickEventHandler(){
   outputDiv.innerHTML="kuhsfsjgzs : "+ txtInput.value;
});


       