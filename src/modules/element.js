"use strict";

function makeElement(element, classes = [], text = "") {
  const el = document.createElement(element);
  if (classes.length) {
    classes.forEach((item) => el.classList.add(item));
  }
  if (text) {
    el.textContent = text;
  }
  return el;
}

export { makeElement };
