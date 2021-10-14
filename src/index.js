"use strict";

import "./style.css";

// Elements
const projectItems = document.querySelectorAll(".project-item");

const MODULE = (function () {
  projectItems.forEach((proj) => {
    proj.addEventListener("mouseover", function (e) {
      const project = e.target.closest("button");
      const exitIcon = project.querySelector(".fa-times-circle");
      exitIcon.classList.remove("hidden");
    });
    proj.addEventListener("mouseout", function (e) {
      const project = e.target.closest("button");
      const exitIcon = project.querySelector(".fa-times-circle");
      exitIcon.classList.add("hidden");
    });
  });
})();
