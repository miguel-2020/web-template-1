const drawer = document.querySelector(".drawer");
const button = document.getElementById("nav-toggler")
button.addEventListener("click",showMenu)


function showMenu(evt){
    evt.currentTarget.classList.toggle("open")
   
    if(evt.currentTarget.getAttribute("aria-expanded") === "true"){
        evt.currentTarget.setAttribute("aria-expanded",false)
        drawer.classList.toggle("open")
        return;
       

    }
        evt.currentTarget.setAttribute("aria-expanded",true)
        drawer.classList.toggle("open")

    
    
    
    window.addEventListener("resize",()=>{
         button.classList.remove("open");
         button.setAttribute("aria-expanded",false)
         drawer.classList.remove("open");
        },{once:true})
}