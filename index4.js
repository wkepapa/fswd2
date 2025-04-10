
    var bulb=document.getElementById("bulb");
  function turnon(){
    var pon=document.getElementById('pon');
    if (bulb.src.includes("offbulb.jpg")){
        bulb.src="onbulb.png";
        }
        else{
           pon.textContent="bulb already on";
        } }
    function turnof(){
        var pon=document.getElementById('pon');
        if (bulb.src.includes("onbulb.png")){
            bulb.src="offbulb.jpg";
        }else{
            pon.textContent="bulb already off"
        }
    }