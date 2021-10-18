"use strict";

import { makeElement } from "./element";
import generateDisplay from "./display";

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
    this.complete = false;
  }
}

const item1 = new Todo("Wash dishes", "10/16/2021", "Sink is very dirty");
const item2 = new Todo("Get gas", "10/15/2021", "Low tank");
const item3 = new Todo("Buy baby food");

item2.complete = true;

addProjectBtn.addEventListener("click", openProjectForm);

// Store projects in object
const projectList = [
  { "Project 1": [item1, item2, item1, item3] },
  { "Project 2": [item3, item2] },
];

let currentProjectIndex = 0;

// Add project name to object on form submission
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create list of current project names
  const projectNames = [];
  projectList.forEach((project) => {
    const [title] = Object.keys(project);
    projectNames.push(title);
  });

  // Check that project name is available
  if (projectNames.includes(projectInput.value)) {
    console.log(
      `Project name "${projectInput.value}" is already taken. Choose another.`
    );
    clearProjectForm();
  } else {
    // Add project name to object
    const newProj = { [projectInput.value]: [] };
    projectList.push(newProj);
    clearProjectForm();
    closeProjectForm();
    generateProjectList();
  }
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

  // Generate project item for each project in list
  projectList.forEach((project, index) => {
    const projectItem = makeElement(
      "button",
      ["tab-btn", "project-item"],
      Object.keys(project)
    );
    projectItem.dataset.id = index;
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

  // Add event listener to project list to update display
  projectListContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest("button").dataset.id;
    currentProjectIndex = clicked;
    generateDisplay(projectList[clicked]);
  });

  return projectListContainer;
}

// Add task functionality
// ELements
const taskForm = document.querySelector(".task-form-container");
const addTaskBtn = document.querySelector(".add-task-btn");
const cancelNewTaskBtn = document.querySelector(".task-cancel");
const addTaskForm = document.querySelector(".task-form");

const taskFormTitle = document.querySelector("#task-title");
const taskFormDate = document.querySelector("#task-date");
const taskFormPriority = document.querySelector("#task-priority");
const taskFormNotes = document.querySelector("#task-notes");

// Functions
const openTaskForm = () => {
  taskForm.classList.remove("not-visible");
  addTaskBtn.classList.add("not-visible");
};

const closeTaskForm = () => {
  taskForm.classList.add("not-visible");
  addTaskBtn.classList.remove("not-visible");
};

const clearTaskForm = () => {
  // Clear form code
  taskFormTitle.value = "";
  taskFormDate.value = "";
  taskFormPriority.value = "";
  taskFormNotes.value = "";
};

// Open and close new task form using add task button
addTaskBtn.addEventListener("click", openTaskForm);
cancelNewTaskBtn.addEventListener("click", function () {
  closeTaskForm();
  clearTaskForm();
});

// Add new task form
addTaskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newToDo = new Todo(
    taskFormTitle.value,
    taskFormDate.value,
    taskFormNotes.value,
    taskFormPriority.value
  );
  clearTaskForm();
  closeTaskForm();

  // Extract current todo list
  const [currentToDo] = [...Object.values(projectList[currentProjectIndex])];

  // Append new item to current todo list
  const newToDoList = [...currentToDo, newToDo];

  // Extract name of project to create new object
  const projectName = Object.keys(projectList[currentProjectIndex])[0];

  projectList.splice(currentProjectIndex, 1, { [projectName]: newToDoList });

  // Update display with current project
  generateDisplay(projectList[currentProjectIndex]);
  addDisplayFunctionality();
});

// Delete task functionality
function addDisplayFunctionality() {
  // Function needed so can be called every time new display is generated
  const displayArea = document.querySelector(".list-display-container");

  displayArea.addEventListener("click", function (e) {
    console.log(e.target);

    // Delete  icon functionality
    if (e.target.classList.contains("fa-trash-alt")) {
      console.log("trash can clicked");
      const itemSelected = e.target.closest(".list-item").dataset.id;
      console.log(itemSelected);
      console.log(
        currentProjectIndex,
        Object.keys(projectList[currentProjectIndex])
      );
      // console.log(
      //   ...Object.values(
      //     projectList[currentProjectIndex].splice(itemSelected, 1)
      //   )
      // );
      generateDisplay(projectList[currentProjectIndex]);
    }
  });
}

export { generateProjectList, projectList, addDisplayFunctionality };
