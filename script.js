// Navbar background on scroll
window.addEventListener("scroll", function(){
  var topBar = document.getElementById("topBar");
  if(window.scrollY > 50){
    topBar.classList.add("scrolled");
  }else{
    topBar.classList.remove("scrolled");
  }
});

// Hero button click effect
var joinBtn = document.getElementById("joinButton");
joinBtn.addEventListener("click", function(){
  joinBtn.classList.toggle("clicked");
});

// Navbar active link highlight
var navLinks = document.querySelectorAll("#topBar ul li a");

navLinks.forEach(function(link){
  link.addEventListener("click", function(){
    navLinks.forEach(function(l){
      l.classList.remove("currentLink");
    });
    this.classList.add("currentLink");
  });
});