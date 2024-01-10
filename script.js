// SKIP-BUTTON

function skip() {
  const skipbutton = document.getElementById('alert');
  skipbutton.style.display = 'none';
}


// MENU - BUTTON

function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");

  let elementsToHide = document.querySelectorAll('main');

  // Loop through the elements and hide/show them
  elementsToHide.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  let elementsToHide1 = document.querySelectorAll('footer');

  // Loop through the elements and hide/show them
  elementsToHide1.forEach(function (element) {
    element.classList.toggle('hidden');

  });
  let elementsToHide2 = document.querySelectorAll('#cell-container');

  // Loop through the elements and hide/show them
  elementsToHide2.forEach(function (element) {
    element.classList.toggle('hide');
  });


  let elementsToHide4 = document.querySelectorAll('.language a');

  // Loop through the elements and hide/show them
  elementsToHide4.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  let elementsToHide3 = document.querySelectorAll('.medium-item li');

  // Loop through the elements and hide/show them
  elementsToHide3.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  let elementsToHide5 = document.querySelectorAll('.navbar');

  // Loop through the elements and hide/show them
  elementsToHide5.forEach(function (element) {
    element.classList.toggle('hide1');
  });
  let elementsToHide6 = document.querySelectorAll('.language pre');

  // Loop through the elements and hide/show them
  elementsToHide6.forEach(function (element) {
    element.classList.toggle('hidden');
  });

  let elementsToHide7 = document.querySelectorAll('.search-button');

  // Loop through the elements and hide/show them
  elementsToHide7.forEach(function (element) {
    element.classList.toggle('hide2');
    

  });
  let elementsToHide8 = document.querySelectorAll('html');

  // Loop through the elements and hide/show them
  elementsToHide8.forEach(function (element) {
    element.classList.toggle('hide3');
    

  });
  let elementsToHide9 = document.querySelectorAll('body');

  // Loop through the elements and hide/show them
  elementsToHide9.forEach(function (element) {
    element.classList.toggle('hide3');
    

  });


}


//  IMAGE-SLIDER

let flag = 0;

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
  let slides = document.getElementsByClassName('slide');

  if (num == slides.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";

}


//  VIDEO-CONTAINER-1

const videoContainer1 = document.querySelector(".main-container1");
const video1 = document.querySelector(".video-container1 video");

videoContainer1.addEventListener("mouseenter", () => {
  video1.play();
});

videoContainer1.addEventListener("mouseleave", () => {
  video1.pause();
  video1.load(); // This resets the video to the beginning everytime it is hovered
});

// VIDEO-CONTAINER-2

const videoContainer2 = document.querySelector(".main-container2");
const video2 = document.querySelector(".video-container2 video");

videoContainer2.addEventListener("mouseenter", () => {
  video2.play();
});

videoContainer2.addEventListener("mouseleave", () => {
  video2.pause();
  video2.load();
});


// VIDEO-CONTAINER-3

const videoContainer3 = document.querySelector(".video-container3");
const video3 = document.querySelector(".video-container3 video");
const poster3 = document.getElementById("poster3");

videoContainer3.addEventListener("mouseenter", () => {
  poster3.style.opacity = 0;
  video3.play();
});

videoContainer3.addEventListener("mouseleave", () => {
  poster3.style.opacity = 1;
  video3.pause();
  video3.currentTime = 0; // This resets the video to the beginning everytime it is hovered

});


// VIDEO-CONTAINER-4

const videoContainer4 = document.querySelector(".video-container4");
const video4 = document.querySelector(".video-container4 video");

videoContainer4.addEventListener("mouseenter", () => {
  video4.play();
});

videoContainer4.addEventListener("mouseleave", () => {
  video4.pause();
  video4.load();
});


// VIDEO-CONTAINER-5

const videoContainer5 = document.querySelector(".video-container5");
const video5 = document.querySelector(".video-container5 video");
const poster5 = document.getElementById("poster5");

videoContainer5.addEventListener("mouseenter", () => {
  poster5.style.opacity = 0;
  video5.play();
});

videoContainer5.addEventListener("mouseleave", () => {
  poster5.style.opacity = 1;
  video5.pause();
  video5.currentTime = 0;

});


//MAKES VIDEO-6 MOVES ALONG WITH CURSOR

document.addEventListener('mousemove', (event) => {
  const Container = document.querySelector('#hovervideo video');
  const xOffset = -40;
  const yOffset = -40;

  const mouseX = event.clientX + xOffset;
  const mouseY = event.clientY + yOffset;

  Container.style.left = `${mouseX}px`;
  Container.style.top = `${mouseY}px`;

});


// CIRCULAR-TEXT-EFFEXT

const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
    `<span style="transform:rotate(${i * 13.2}deg)">${char}</span>`
).join("");


// PRE-LOADER

const preloader1 = document.getElementById('preloader');
function myFunction() {
  preloader.style.display = 'none';
}













