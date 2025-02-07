let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let textchange=document.querySelector(".copycode")

let rgb1="#13ec63";
let rgb2="#183bd8";
let hexvalue =()=>{
    let num="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
        color= color+num[Math.floor(Math.random()*16)]
    }
    return color;
}
let handlebtn1=()=>{
     rgb1=hexvalue();
    document.body.style.backgroundImage = `linear-gradient(to top right, ${rgb1} 10%, ${rgb2}  100%)`;
    btn1.textContent=`${rgb1}`;
    btn1.style.backgroundColor=`${rgb1}`;
    textchange.textContent=`background-image linear-gradient(to top right, ${rgb1} 10%, ${rgb2}  100%)`;
}
let handlebtn2=()=>{
    rgb2=hexvalue();
   document.body.style.backgroundImage = `linear-gradient(to top right, ${rgb1} 10%, ${rgb2} 100%)`;
   btn2.textContent=`${rgb2}`;
   btn2.style.backgroundColor=`${rgb2}`;
   textchange.textContent=`background-image linear-gradient(to top right, ${rgb1} 10%, ${rgb2}  100%)`;
}
 btn1.addEventListener('click',()=>{
    handlebtn1();
 });
 btn2.addEventListener('click',()=>{
    handlebtn2();
 });

 textchange.addEventListener('click',()=>{
    navigator.clipboard.writeText(textchange.innerHTML);
    alert("copyed");
 })