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

const displayContainer = document.querySelector(".display-container");
const displayTitle = document.querySelector(".list-header");
// const listContainer = document.querySelector(".list-container");

let currentProject;

///////////////////////////////////////////////
// Test projects
const toDoList = new ProjectList();

const project1 = new Project("Project 1");
const project2 = new Project("Groceries");
const dishes = new Task("Wash dishes", "10/20/2021");
project1.addTask(dishes);

toDoList.addProject(project1);
toDoList.addProject(project2);
///////////////////////////////////////////////

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

function initializeWebsite() {
  updateProjectList();
}

function updateProjectList() {
  // Clear existing project list
  document.querySelector(".project-list").remove();

  // Create new project list
  const projectList = makeElement("div", ["project-list"]);

  // Generate buttons for user project list
  const currentProjects = toDoList.getProjects();
  currentProjects.forEach((project, index) => {
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
      projectBtn.dataset.id = index;
      projectList.appendChild(projectBtn);
    }
  });
  // Add event listener to project list;
  projectContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest("button");
    // if (!clicked) return;
    if (!clicked.classList.contains("project-item")) return;
    const clickedIndex = e.target.closest("button").dataset.id;
    currentProject = clicked.textContent;
    // console.log("current project: ", currentProject);
    // console.log("project id", clicked);

    displayTitle.textContent = toDoList
      .getProjectAtIndex(clickedIndex)
      .getName();
    updateProjectDisplay(toDoList.getProjectAtIndex(clickedIndex));
  });

  projectContainer.prepend(projectList);
}

function updateProjectDisplay(project) {
  // Clear display
  document.querySelector(".list-container").remove();

  // Create new list container
  const listContainer = makeElement("ul", ["list-container"]);
  // Create list items and append to list container
  const taskList = project.getTasks();
  taskList.forEach((task) => {
    const listItem = makeElement("li", ["list-item"]);

    // List item left side
    const listItemLeft = makeElement("div", ["list-item-left"]);
    listItemLeft.appendChild(makeElement("p", ["task-title"], task.getName()));
    listItemLeft.insertAdjacentHTML(
      "afterbegin",
      '<i class="far fa-check-square"></i>'
    );

    // List item right side
    const listItemRight = makeElement("div", ["list-item-right"]);
    listItemRight.appendChild(makeElement("p", ["task-date"], task.getDate()));
    listItemRight.insertAdjacentHTML(
      "beforeend",
      '<i class="far fa-trash-alt"></i>'
    );

    listItem.appendChild(listItemLeft);
    listItem.appendChild(listItemRight);

    listContainer.appendChild(listItem);
  });

  displayContainer.appendChild(listContainer);
}

{
  /* <li class="list-item">
              <div class="list-item-left">
                <i class="far fa-check-square"></i>
                <p class="task-title">Wash the dishes</p>
              </div>
              <div class="list-item-right">
                <p class="task-date">10/14/21</p>
                <i class="far fa-trash-alt"></i>
              </div>
            </li> */
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

export { initializeWebsite };
