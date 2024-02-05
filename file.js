const A=document.getElementById("btn1");
const B=document.getElementById("btn2");
const C=document.getElementById("btn3");
const D=document.getElementById("btn4");
const  resetButton=document.getElementById("reset");


let body=document.querySelector("body");

let torch=document.querySelector(".torch");


A.addEventListener('click',()=>{
    body.style.backgroundColor="red";
  if(!torch.classList.contains('A')){
    torch.classList.add("A");
  }
  resetButton.style.display="block";
});

B.addEventListener('click',()=>{
body.style.backgroundColor="yellow";
if(!torch.classList.contains('B')){
    torch.classList.add("B");
}
resetButton.style.display="block";
});

C.addEventListener('click',()=>{
body.style.backgroundColor="blue";
if(!torch.classList.contains('C')){
    torch.classList.add('C');
}
resetButton.style.display="block";
});

D.addEventListener('click',()=>{
body.style.backgroundColor="green";
if(!torch.classList.contains('D')){
    torch.classList.add("D");
}
resetButton.style.display="block";
});

 resetButton.addEventListener("click",()=>{
    body.style.backgroundColor='black';
    if(!torch.classList.contains("reset")){
        torch.classList.add("reset");
    }
    resetButton.style.display="none";
 });






