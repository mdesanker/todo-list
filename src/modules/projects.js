"use strict";

// Elements
const addProjectBtn = document.querySelector(".add-project-btn");
const projectFormContainer = document.querySelector(".project-form-container");
const projectForm = document.querySelector(".add-project");
const projectInput = document.querySelector("#project-input");
const projectFormCancelBtn = document.querySelector(".cancel-btn");

// Functions
const openProjectForm = function (e) {
  e.preventDefault();
  addProjectBtn.classList.add("not-visible");
  projectFormContainer.classList.remove("not-visible");
};

const closeProjectForm = function () {
  addProjectBtn.classList.remove("not-visible");
  projectFormContainer.classList.add("not-visible");
};

const clearProjectForm = function (e) {
  projectInput.value = "";
};

// Todo object class
class Todo {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
  }
}

const item1 = new Todo("Wash dishes");
const item2 = new Todo("Get gas");

addProjectBtn.addEventListener("click", openProjectForm);

// Store projects in object
const projectList = {
  "Project 1": [item1, item2, item1, item2, item1, item2],
  "Project 2": [],
};

// Add project name to object on form submission
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Check that project name is available
  if (Object.keys(projectList).includes(projectInput.value)) {
    console.log(`Project name "${projectInput.value}" is already taken.`);
    return;
  }
  // Add project name to object
  projectList[projectInput.value] = [];
  clearProjectForm();
  closeProjectForm();
  console.log(projectList);
  generateProjectList();
});

projectFormCancelBtn.addEventListener("click", function () {
  clearProjectForm();
  closeProjectForm();
});

function generateProjectList() {
  const projectListContainer = document.querySelector(".project-list");
  const projectItems = document.querySelectorAll(".project-item");

  // Clear project list
  projectItems.forEach((item) => {
    projectListContainer.removeChild(item);
  });

  // Generate sidebar project item for each project in list
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

export { generateProjectList, projectList };
