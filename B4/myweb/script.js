let isShow = false
let nav = document.getElementById('nav');
function display(){
   isShow=!isShow
   if(!isShow){
    nav.classList.add("show")
   }
   else{
    nav.classList.remove('show')
   }
}