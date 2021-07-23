const gap = 0;
const videos = document.getElementById("videos");
let slideIndex = 0;
let imgWidth = document.querySelector(".part-two__vidao").offsetWidth;
const slideFunc = () => {
  slideIndex += 1;
  if (slideIndex > 7) {
    if (!(slideIndex < 8)) {
      slideIndex = 0;
    }
  }
  videos.scrollTo(imgWidth * slideIndex, 0);
};

let autoSlideInterval = setInterval(slideFunc, 3000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 3000);
  }, 4000);
};

videos.addEventListener("click", delayAutoSliding);
videos.addEventListener("mouseover", delayAutoSliding);

const allVideos = document.querySelectorAll(".part-two__vidao");
const smallVideos = document.querySelectorAll(".vidao__two");
const mainVideo = document.querySelector(".vidao__one");
allVideos.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    let srcMainVideo = mainVideo.src;
    let srcSmallVideo = smallVideos[index].src;
    console.log("main: " + srcMainVideo);
    console.log("small: " + srcSmallVideo);
    mainVideo.src = srcSmallVideo;
    smallVideos[index].src = srcMainVideo;
  });
});
