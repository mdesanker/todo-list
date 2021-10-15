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

// Sidebar form to create new project array

// Todo objects will be instances of a class

class Todo {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
  }
}

const item1 = new Todo("Grocery shopping", "10/16/21");
const item2 = new Todo("Wash dishes");
console.log(item1);
console.log(item2);

// Projects will be an array of todo objects

const project1 = [];
project1.push(item1);
project1.push(item2);

console.log(project1);

// Project array items will be output to the display

project1.forEach((item) => {
  console.log(`${item.title}`);
});

// Everytime todo item added to project, refresh display
