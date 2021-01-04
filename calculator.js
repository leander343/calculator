let c=document.querySelectorAll('.calc-row');
let d=document.querySelector('.result p');
let f=document.querySelectorAll('.calc-row');
var e=0;
let expression=[];
console.log(c);
let number="";

for(i=0; i<c.length;i++)
{
 
c[i].addEventListener('click',function(event)
{
     const value=String(event.target.innerText);
     console.log(value);
    if(isNaN(parseInt(event.target.innerText))!= true)
    {
     input(value); 
     rerender();
     }
     else if (value != "C" && value != "=" && value !="←")
     {
     var d=expression.length;
     if(value!==expression.charAt(d-1))
     {input(value); 
        rerender();
       }}

});
}

for(i=0; i<c.length;i++)
{
 
f[i].addEventListener('click',function(event)
{
   if (event.target.innerText==="=")
   {
    expression=String(eval(expression));
    rerender();
   }

   if (event.target.innerText==="C")
   {
    expression="0";
    rerender();
   }


   if (event.target.className==="calc-button backspace")
   {
    expression=expression.slice(0,-1);
    if(expression.length===0)
    {expression="0";}
    rerender();
   }

});
}

function rerender(){d.innerText=expression;}
 
 function input(value){
     if (value==="x"){value="*"};
     if (value==="÷"){value="/"};
     expression=expression+value;
     console.log(expression);
  
 }

 