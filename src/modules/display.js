"use strict";

import { Task } from "./task";
import { Project } from "./project";
import { ProjectList } from "./projectList";
import { makeElement } from "./element";

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

function initilizeWebsite() {
  const projectContainer = document.querySelector(".project-container");

  projectContainer.prepend(updateProjectList());
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
  return projectList;
}

function updateDisplay() {
  //
}

export { initilizeWebsite };
