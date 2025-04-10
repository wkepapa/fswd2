
function dar(){
let currentDate=new Date();
let h=currentDate.getHours();
let m=currentDate.getMinutes();
let s=currentDate.getSeconds();
let itime=`hours:${h} min:${m} sec:${s}`
document.getElementById("clock").innerHTML=itime;
}
setInterval(dar,1000);
dar();
