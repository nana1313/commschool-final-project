//ჰედერის სლაიდ შოუ
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
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

//მოდალი
let btn = document.getElementById("explore-more");
let span = document.getElementsByClassName("close")[0];
btn.addEventListener("click",function() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
  });
span.addEventListener("click",function() {
  modal.style.display = "none";
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}