// var images = [];
// var time = 3000;
// var i =0;
// images[0] = 'cycle.png';
// images[1]= 'run.png';
// images[2] = 'shoejog.jpg';
//
// function changeImg() {
//   document.slide.src = images[i];
//
//   if(i< images.length -1) { // i from 0 < 2
//     i++;
//   } else{
//     i=0;
//   }
//
//   setTimeout("changeImg()", time);
// }
//
// window.onload = changeImg();
// // alert("Fdjfal");



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
