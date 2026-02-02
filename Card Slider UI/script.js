const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
let autoSlideInterval;

// Function to show slide
function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// Next slide
function nextSlide(){
  index = (index + 1) % slides.length;
  showSlide(index);
}

// Previous slide
function prevSlide(){
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Auto slide every 4 seconds
function startAutoSlide(){
  autoSlideInterval = setInterval(nextSlide, 4000);
}

// Stop auto-slide on manual click
function resetAutoSlide(){
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Event listeners
nextBtn.addEventListener("click", ()=>{
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", ()=>{
  prevSlide();
  resetAutoSlide();
});

// Start auto-slide
startAutoSlide();
