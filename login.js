let close=document.getElementById('close');
close.addEventListener('click',()=>{
    window.location.href='/';
})


let a=document.getElementById("menu-btn")
let b=document.getElementById('menu')
a.onclick=()=>{
   a.classList.toggle('open')
   if(b.classList.contains('hidden')){
       b.classList.remove('hidden')
       b.classList.add('flex')
   }
   else if(b.classList.contains('flex')){
       b.classList.remove('flex')
       b.classList.add('hidden')
   }
}
