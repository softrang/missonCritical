// menu tragal start 

const menuBtn = document.getElementById("mainBtn");
const menuUL = document.getElementById("menuUl");
const Closer = document.getElementById("closer");

menuBtn.addEventListener("click", ()=>{
  
    if(menuUL.classList.contains("d-none")){
        menuUL.classList.remove("d-none");
        menuUL.classList.add("d-block")
      
      


    } 

})




Closer.addEventListener("click", ()=>{
    menuUL.classList.remove("d-block");
    menuUL.classList.add("d-none")
  
})
// menu tragal end 






// slider start 

const Slider = document.querySelectorAll(".slider");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0; 
const totalSlides = Slider.length;
let intervalId = null;


Slider.forEach((slide, i) => {
   
    slide.style.transform = `translateX(${100 * i}%)`; 
});


const updateSlide = () => {
  index++;
  
  if (index >= totalSlides) {
    index = 0; 
  }

  Slider.forEach((slide, i) => {
    slide.style.transition = 'transform 0.7s ease-in-out';
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};


const startAutoSlide = () => {
  intervalId = setInterval(updateSlide, 4000); 
};


next.addEventListener('click', () => {
  clearInterval(intervalId); 
  updateSlide(); 
  startAutoSlide(); 
});


prev.addEventListener('click', () => {
  clearInterval(intervalId); 
  index--;
  
  if (index < 0) {
    index = totalSlides - 1; 
  }

  Slider.forEach((slide, i) => {
    slide.style.transition = 'transform 0.7s ease-in-out';
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });

  startAutoSlide(); 
});


startAutoSlide();














// Function to update the slide position based on the index
function updateSlides() {
  ecom.forEach((slide, i) => {
    slide.style.transition = 'transform 0.7s ease-in-out';
    slide.style.transform = `translateX(-${100 * indexx}%) scale(0.9)`; // Only scale the active slide fully
  });
}

// Function to reset slide position after reaching the last or first slide
function resetTransition() {
  ecom.forEach((slide) => {
    slide.style.transition = 'none'; // Remove the transition for a seamless reset
    slide.style.transform = `translateX(-${100 * indexx}%)`; // Reset the position
  });
}

// Previous button click event
eprev.addEventListener("click", () => {
  indexx--;

  if (indexx < 0) {
    indexx = ecom.length - 4; // If index goes below 0, set it to the last slide
  }

  updateSlides();
});

// Next button click event
enext.addEventListener("click", () => {
  indexx++;

  if (indexx > ecom.length-4) {
    indexx = 0; // If index exceeds the number of slides, reset to the first slide
  }

  updateSlides();
});



//ecom button end 








// slider end 