"use strict";

import { Task } from "./task";
import { Project } from "./project";
import { ProjectList } from "./projectList";
import { makeElement } from "./element";

// ELEMENTS
const projectContainer = document.querySelector(".project-container");
const addProjectBtn = document.querySelector(".add-project-btn");
const projectFormContainer = document.querySelector(".project-form-container");
const projectForm = document.querySelector(".add-project");
const projectInputField = document.querySelector("#project-input");
const projectSubmitBtn = document.querySelector(".add-btn");
const projectCancelBtn = document.querySelector(".cancel-btn");

const toDoList = new ProjectList();
// console.log(toDoList.getProjects());

const project1 = new Project("Project 1");
const project2 = new Project("Groceries");
const dishes = new Task("Wash dishes");
project1.addTask(dishes);

// console.log(project1);

toDoList.addProject(project1);
toDoList.addProject(project2);
// console.log(toDoList);

// FUNCTIONS
function openProjectForm() {
  addProjectBtn.classList.add("not-visible");
  projectFormContainer.classList.remove("not-visible");
}

function closeProjectForm() {
  projectInputField.value = "";
  addProjectBtn.classList.remove("not-visible");
  projectFormContainer.classList.add("not-visible");
}

function initilizeWebsite() {
  // Create To Do List

  // projectContainer.prepend(updateProjectList());
  updateProjectList();
}

function updateProjectList() {
  // Clear existing project list
  document.querySelector(".project-list").remove();

  // Create new project list
  const projectList = makeElement("div", ["project-list"]);

  // Generate buttons for user project list
  const currentProjects = toDoList.getProjects();
  currentProjects.forEach((project) => {
    if (project.getName() !== "Today" && project.getName() !== "Week") {
      const projectBtn = makeElement(
        "button",
        ["tab-btn", "project-item"],
        project.getName()
      );
      projectBtn.insertAdjacentHTML(
        "afterbegin",
        '<i class="fas fa-tasks"></i>'
      );
      projectBtn.insertAdjacentHTML(
        "beforeend",
        '<i class="fas fa-times-circle hidden"></i>'
      );
      projectList.appendChild(projectBtn);
    }
  });
  projectContainer.prepend(projectList);
  // return projectList;
  return;
}

function updateDisplay() {
  //
}

// EVENT LISTENERS
addProjectBtn.addEventListener("click", openProjectForm);
projectCancelBtn.addEventListener("click", closeProjectForm);
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newProject = projectInputField.value;
  if (toDoList.checkProjectName(newProject))
    toDoList.addProject(new Project(newProject));
  else alert(`${newProject} already in use.`);
  closeProjectForm();
  updateProjectList();
});

export { initilizeWebsite };
