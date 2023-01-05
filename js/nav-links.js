export const navLinkActions = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  const sectionList = document.querySelectorAll(".section");
  const header = document.querySelector(".header");
  const toTopBtn = document.querySelector("#to-top");

  const headerHeight = header.clientHeight;

  window.addEventListener("scroll", () => {
    const scrollDistance = window.scrollY;
    let currentSectionId = "";
    // console.log(headerHeight);
    scrollDistance > headerHeight
      ? toTopBtn.classList.add("show")
      : toTopBtn.classList.remove("show");

    sectionList.forEach((item) => {
      if (item.offsetTop - headerHeight - 10 <= scrollDistance) {
        currentSectionId = item.getAttribute("id");
        anchors.forEach((item) => {
          if (item.classList.contains("current")) {
            item.classList.remove("current");
          }
        });
      }
      document
        .querySelector(`a[href*="#${currentSectionId}"]`)
        .classList.add("current");
    });
  });
};
