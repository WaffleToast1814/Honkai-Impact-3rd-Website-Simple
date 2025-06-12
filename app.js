let toggleBtn = document.getElementById('bar')
let slides = document.getElementsByClassName("MySlides")
let slideIndex = 0

function toggle(){
    let links = document.querySelector('.mobile-menu')

if(links.style.display === "block"){
    links.style.display = "none"
} else{
    links.style.display = "block";
    links.classList.add("mobile-menu-active")
}

}

function showSlides(){
    let i;
    for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
}


showSlides()





toggleBtn.addEventListener('click', toggle)
document.addEventListener('DOMContentLoaded', () => {
  const playableBtn = document.querySelector('.Playable-Character-Button');
  const unplayableBtn = document.querySelector('.Unplayable-Character-Button');
  const playableList = document.querySelector('.Playable-Character-List-Image');
  const unplayableList = document.querySelector('.Unplayable-Character-List-Image');

  playableBtn.addEventListener('click', () => {
    playableList.style.display = 'grid';
    unplayableList.style.display = 'none';
    playableList.classList.add('Playable-Character-List-Image')
    playableList.style.gridTemplateColumns = 'repeat 1,2fr'
  });

  unplayableBtn.addEventListener('click', () => {
    playableList.style.display = 'none';
    unplayableList.style.display = 'grid';
    unplayableList.classList.add('Unplayable-Character-List-Image')
    unplayableList.style.gridTemplateColumns = 'repeat 1,2fr'
  });
});
