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
let phone = document.getElementById('phone');
phone.addEventListener("click", function(){
  phone.value = "+995";
})

const form = document.getElementById('form')
        form.addEventListener("submit", function(e){
            e.preventDefault();
            
            try{
                let form = document.forms.form
                const validateEmail = (email) => {
                    return String(email)
                    .toLowerCase()
                    .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                };
                if(! validateEmail(form.email.value)){
                    throw new Error ('Email is not valid')
                    return
                }
                if(form.subject.value.length < 5){
                    throw new Error ('Subject must be longer than 5 characters');
                    return
                }
                if(form.phone.value.length > 11 || form.phone.value.length < 11){
                    throw new Error ('Mobile number should be 9 digits');
                }
            }
            catch(e){
                const p = document.createElement('p');
                p.textContent = e.message;
                p.style.color = "red"
                p.style.fontFamily = "opensans";
                p.style.textAlign = "center";
                form.appendChild(p);
            }
            document.getElementById("form").reset();
        })
