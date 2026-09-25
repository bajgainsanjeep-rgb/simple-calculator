const digits=document.querySelectorAll("#digit");
const result=document.querySelector(".amount");
const operators=document.querySelectorAll("#operator");
const clear=document.querySelector("#clear");

digits.forEach((digit)=>{
    
    digit.addEventListener("click",()=>{
      const digitvalues=digit.getAttribute("value"); 
      result.innerText= digitvalues;
      
     
       
    
    })
})
operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        const operatorvalue=operator.getAttribute("value");
      
    })
})




