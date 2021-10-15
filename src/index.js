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

///////////////////////////////////////////////////

// Add Project button functionality
const addProjectBtn = document.querySelector(".add-project-btn");
const projectFormContainer = document.querySelector(".project-form-container");
const projectForm = document.querySelector(".add-project");
const projectInput = document.querySelector("#project-input");
const projectFormCancelBtn = document.querySelector(".cancel-btn");

// Show project form on button click
const openForm = function (e) {
  e.preventDefault();
  addProjectBtn.classList.add("not-visible");
  projectFormContainer.classList.remove("not-visible");
};

// Close form
const closeForm = function () {
  addProjectBtn.classList.remove("not-visible");
  projectFormContainer.classList.add("not-visible");
};

// Clear project form
const clearForm = function (e) {
  projectInput.value = "";
};

addProjectBtn.addEventListener("click", openForm);

// Store projects in object
const projectList = {
  "Project 1": {},
  "Project 2": {},
};

// Add project name to object on form submission
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Check that project name is available
  if (Object.keys(projectList).includes(projectInput.value)) {
    console.log(`Project name ${projectInput.value} is already taken.`);
    return;
  }
  // Add project name to object
  projectList[projectInput.value] = [];
  clearForm();
  closeForm();
  console.log(projectList);
});

projectFormCancelBtn.addEventListener("click", function () {
  clearForm();
  closeForm();
});

function generateProjectList() {
  const projectListContainer = document.querySelector(".project-list");
  const projectItems = document.querySelectorAll(".project-item");

  // Clear project list
  projectItems.forEach((item) => {
    projectListContainer.removeChild(item);
  });

  // Generate sidebar project list using projectList object
  Object.keys(projectList).forEach((project) => {
    const projectItem = document.createElement("button");
    projectItem.classList.add("tab-btn");
    projectItem.classList.add("project-item");
    projectItem.textContent = project;
    projectItem.insertAdjacentHTML(
      "afterbegin",
      "<i class='fas fa-tasks'></i>"
    );
    projectItem.insertAdjacentHTML(
      "beforeend",
      "<i class='fas fa-times-circle hidden'></i>"
    );

    projectListContainer.appendChild(projectItem);
  });

  return projectListContainer;
}

generateProjectList();
