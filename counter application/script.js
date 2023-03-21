let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let value = document.getElementById("value");
let display = document.getElementById("display");


increment.addEventListener("click",()=>{
    display.innerHTML="";
    let currentValue = Number(value.innerHTML);
    currentValue+=1;
    value.innerHTML=currentValue;
})
decrement.addEventListener("click",()=>{
    let currentValue = Number(value.innerHTML);
    if (currentValue<=0) {
        display.innerHTML="Value is already 0"
    }
    else{
        currentValue-=1;
    value.innerHTML=currentValue;
    }
    
})
reset.addEventListener("click",()=>{
    display.innerHTML="";
    value.innerHTML=0;
})



