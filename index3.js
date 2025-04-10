const addcal=(a,b)=>a+b;
const mincal=(a,b)=>a-b;
const multical=(a,b)=>a*b;
const divcal=(a,b)=>{
    try{
        if(b==0){
            throw new console.error("division by zero");   
        }
     return a/b;
    }catch(er){
        console.log(er.message)
    }
}
function Calc(op){
    var output;
    let a=parseFloat(document.getElementById("a").value);
    let b=parseFloat(document.getElementById("b").value);
    if(isNaN(a)||isNaN(b)){
     output="invalid numbers"   
    }
    else{
        switch(op){
            case "+":
               output= addcal(a,b);
                break;
            case "-":
                output=mincal(a,b);
                break;
            case "*":
               output= multical(a,b);
               break;
            case "/":
                output=divcal(a,b);
                break;
        }
    }
    document.getElementById("output").textContent="output:"+output;
}

