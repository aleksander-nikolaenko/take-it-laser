export const modal = () => {
  const modalBackdrop = document.querySelector("[data-modal-backdrop]");
  const modalWindow = document.querySelector("[data-modal]");
  const openModalBtn = document.querySelectorAll("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");

  const select = document.querySelector(".modal-select");
  const selectTitle = select.querySelector(".modal-select-title");
  const selectLabels = select.querySelectorAll(".modal-select-label");
  const selectAddress = document.querySelector(".modal-select-address");

  const address = {
    Kharkiv: "м.Харків, майдан Свободи 7",
    Poltava: "м.Полтава, вул.Котляревського 1/27",
  };

  const openHandler = () => {
    modalBackdrop.classList.remove("is-hidden");
    document.querySelector("html").classList.add("no-scroll");
  };
  const closeHandler = () => {
    modalBackdrop.classList.add("is-hidden");
    document.querySelector("html").classList.remove("no-scroll");
  };

  const backdropHandler = (event) => {
    if (event.target === modalBackdrop) {
      modalBackdrop.classList.add("is-hidden");
      document.querySelector("html").classList.remove("no-scroll");
    }
  };

  const selectHandler = () => {
    "active" === select.getAttribute("data-state")
      ? select.setAttribute("data-state", "")
      : select.setAttribute("data-state", "active");
  };
  const selectLabelHandler = (event, label) => {
    selectTitle.textContent = event.target.textContent;
    selectTitle.dataset.content = label.dataset.content;
    selectTitle.dataset.state = "selected";
    selectAddress.textContent = address[label.dataset.content];
    select.setAttribute("data-state", "");
  };
  const modalClickHandler = (event) => {
    if (event.target !== selectTitle) {
      select.setAttribute("data-state", "");
    }
  };

  // Open modal when click to open button
  openModalBtn.forEach((item) => {
    item.addEventListener("click", openHandler);
  });
  // Close modal when click to close button
  closeModalBtn.addEventListener("click", closeHandler);
  // Close modal when click to modal backdrop
  modalBackdrop.addEventListener("click", backdropHandler);
  // Open and close select dropdown when click to select title
  selectTitle.addEventListener("click", selectHandler);
  // Close select when click to option
  selectLabels.forEach((item) => {
    item.addEventListener("click", (event) => selectLabelHandler(event, item));
  });
  // Close select when click out off title
  modalWindow.addEventListener("click", modalClickHandler);
};
