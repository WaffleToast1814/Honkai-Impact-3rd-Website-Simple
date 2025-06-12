let toggleBtn = document.getElementById('bar')



function toggle(){
    let links = document.querySelector('.mobile-menu-2')

if(links.style.display === "block"){
    links.style.display = "none"
} else{
    links.style.display = "block";
    links.classList.add("mobile-menu-active")
}


}

toggleBtn.addEventListener('click', toggle)

