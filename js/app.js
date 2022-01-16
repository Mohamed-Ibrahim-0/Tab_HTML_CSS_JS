let titleDiv = document.querySelectorAll(".title");
let mainContent = document.querySelectorAll(".main-content");

titleDiv.forEach((ele) => {
  ele.addEventListener("click", () => {
    titleDiv.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");

    mainContent.forEach((div) => {
      div.classList.remove("active");
      document.querySelector(ele.dataset.name).classList.add("active");
    });

    // document.querySelector(ele.dataset.name).classList.add("active");
  });
});
