const it=setInterval(Colorchangefunc,2000);
let arr=['red','green','blue','yellow','black','brown','violet','indigo','orange','peach']
function Colorchangefunc(){
let colorindex=Math.floor(Math.random()*arr.length);
document.body.style.backgroundColor=arr[colorindex];
};