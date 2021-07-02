let down = document.querySelector(".btn1");
let up = document.querySelector(".btn3");
let reset     = document.querySelector(".btn2");

let add = document.querySelector(".number");
let start = 0;

down.addEventListener("click",function (){
    document.querySelector(".number").style.color="red";
    start -=1;
    add.innerHTML = start;
});



up.addEventListener("click",function (){
   document.querySelector(".number").style.color="green";
    start +=1;
    add.innerHTML = start;
    
});

reset.addEventListener("click", function (){
    document.querySelector(".number").style.color="black";
    start =0
    add.innerHTML = start;
});


