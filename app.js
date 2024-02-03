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
let modal = document.getElementById("myModal");
let btn = document.getElementsByClassName("explore-more");
let span = document.getElementsByClassName("close")[0];

btn[0].addEventListener("click",function() {
    modal.style.display = "block";
  });
btn[1].addEventListener("click",function() {
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

//ტაბები
let tab;
let tabContent;
window.onload = function () {
  tabContent = document.getElementsByClassName("tabContent");
  tab = document.getElementsByClassName("tab");
  hideTabsContent(1);
};
document.getElementById("tabs").onclick = function (event) {
  let target = event.target;
  if (target.className == "tab") {
    for (let i = 0; i < tab.length; i++) {
    if (target == tab[i]) {
      showTabsContent(i);
      break;
      }
    }
  }
};
function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("whiteborder");
  }
}
function showTabsContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    hideTabsContent(0);
    tab[b].classList.add("whiteborder");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
        }
      }

//ვალიდაციები
function validateInput() {
  let subject = document.getElementById("subject").value;

  if (subject.length <= 5) {
      document.getElementById("errorText").innerHTML = "Error: Input must be more than 5 characters.";
  } else {
      document.getElementById("errorText").innerHTML = "";
      // Continue with your logic for valid input
  }
}