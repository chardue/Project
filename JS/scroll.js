document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".main");

  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault(); // prevent vertical scroll
        scrollContainer.scrollLeft += e.deltaY;
      }
    });
  }
});
