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

const slideTrack = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    const text = slide.querySelector("p");

    if (slideTrack.style.animationPlayState !== "paused") {
      slideTrack.style.animationPlayState = "paused";
      text.style.opacity = "1";
    } else {
      slideTrack.style.animationPlayState = "running";
      text.style.opacity = "0";
    }
  });
});

const galleryRows = document.querySelectorAll(".gallery-row");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const text = box.querySelector("p");

    text.style.opacity = "1";
    galleryRows.forEach((row) => {
      row.style.animationPlayState = "paused";
    });

    setTimeout(() => {
      text.style.opacity = "0";
      galleryRows.forEach((row) => {
        row.style.animationPlayState = "running";
      });
    }, 2500);

    // galleryRows.forEach((row) => {
    //   row.addEventListener("click", () => {
    //     if (row.style.animationPlayState !== "paused") {
    //       text.style.opacity = "1";
    //       console.log("paused");

    //       galleryRows.forEach((row) => {
    //         row.style.animationPlayState = "paused";
    //       });
    //     } else {
    //       text.style.opacity = "0";
    //       console.log("running");

    //       galleryRows.forEach((row) => {
    //         row.style.animationPlayState = "running";
    //       });
    //     }
    //   });
    // });
  });
});

// const options = document.querySelectorAll("option");
// const select = document.querySelector(".lang-select");
// const selectValue = select.options[select.selectedIndex].value;
// console.log(options);
// console.log(select);
// console.log(selectValue);

// function update() {
//   const select = document.querySelector(".lang-select");
//   const option = select.options[select.selectedIndex];

//   console.log(option.text);
//   console.log(option.value);
//   console.log("Clicked");

//   console.log(window.location.href);

//   if (option.value !== "id") {
//     window.location.href = `/lang/${option.value}-version.html`;
//     return;
//   } else {
//     window.location.href = "#";
//     return;
//   }
// }

// update();
