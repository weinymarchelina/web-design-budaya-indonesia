let imgIndex = 0;

const showSlides = () => {
  const container = document.querySelector(".overlay");
  const imgs = container.querySelectorAll("img");

  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = "0";
  }
  imgIndex++;

  if (imgIndex > imgs.length) {
    imgIndex = 1;
  }

  imgs[imgIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 7000);
};

showSlides();
