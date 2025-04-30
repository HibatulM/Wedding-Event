const darkIcon = document.getElementById("theme");
const toggle = document.getElementById("toggle");
const lightIcon = "https://www.iconpacks.net/icons/2/free-sun-icon-3335-thumb.png";
const nightIcon = "https://www.shareicon.net/data/512x512/2015/08/04/79959_moon_512x512.png";
const body = document.body;
const modAni = document.getElementById("ani");
const box = document.getElementById("modal-content");
const onOff = document.getElementById("onOff");
const onBtn = document.getElementById("onBtn");
const offIcon = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/32-512.png";
const onIcon = "https://cdn4.iconfinder.com/data/icons/education-black-outlined-1/48/21-512.png";

const changeMode = () => {
    body.classList.add("dark-mode");
    console.log(body.classList);
    darkIcon.src = lightIcon;
}

const handleModal = () =>{

  if(onOff.src === onIcon){
    onOff.src = offIcon;
    modAni.style.display = "none";
  }else{
    onOff.src = onIcon;
    modAni.style.display = "block";
  }
}

toggle.addEventListener('click', () =>{
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    darkIcon.src = isDarkMode ? lightIcon : nightIcon;
});


onBtn.addEventListener('click', handleModal);

const form = document.getElementById("rsvp");

const modal = document.getElementById("modal");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const addRSVP = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let num = document.getElementById("num").value;
    const list = document.getElementById("list");
    const newEntry = document.createElement("li");
    const modalText = document.createElement("p");
    
    
    if(num > 0){
        newEntry.textContent = name + " is coming with Family and Friends!";
    }else{
        newEntry.textContent = name + " is joining the party!";
    }
    modalText.textContent = "Hi " + name + "! Thanks you for deciding to join us in this celebration!";


    list.appendChild(newEntry); 
    const hasPara = box.querySelector('p') !== null;
    if(hasPara){}else{box.appendChild(modalText);}
    
    form.reset();
    //Open the modal
    modal.style.display = "block";
    setTimeout(function() {modal.style.display = "none"}, 5000);
}

form.addEventListener('submit', addRSVP);


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Cloing the modal
const closeMod = document.getElementById("close");

const handleClose = () => {
    modal.style.display = "none";
}

closeMod.addEventListener('click', handleClose);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
 
}
