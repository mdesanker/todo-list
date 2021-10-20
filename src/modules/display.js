"use strict";

import { Task } from "./task";
import { Project } from "./project";
import { ProjectList } from "./projectList";
import { makeElement } from "./element";

// ELEMENTS
const projectContainer = document.querySelector(".sidebar");
const defaultProjectContainer = document.querySelector(
  ".default-project-container"
);
const userProjectContainer = document.querySelector(".user-project-container");
const addProjectBtn = document.querySelector(".add-project-btn");
const projectFormContainer = document.querySelector(".project-form-container");
const projectForm = document.querySelector(".add-project");
const projectInputField = document.querySelector("#project-input");
const projectSubmitBtn = document.querySelector(".add-btn");
const projectCancelBtn = document.querySelector(".cancel-btn");

const displayContainer = document.querySelector(".display-container");
const displayTitle = document.querySelector(".list-title");
const deleteProjBtn = document.querySelector(".delete-proj-btn");

const addTaskBtn = document.querySelector(".add-task-btn");
const taskFormContainer = document.querySelector(".task-form-container");
const taskForm = document.querySelector(".task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskDateInput = document.querySelector("#task-date");
const taskPriorityInput = document.querySelector("#task-priority");
const taskSubmitBtn = document.querySelector(".task-submit");
const taskCancelBtn = document.querySelector(".task-cancel");

// Default To Do list
const defaultToDo = new ProjectList();

const project1 = new Project("Chores");
const project2 = new Project("Groceries");
const dishes = new Task("Wash dishes", "10/20/2021");
project1.addTask(dishes);

defaultToDo.addProject(project1);
defaultToDo.addProject(project2);

// Default to "Today" project
let activeProjectIndex = 0;
let myToDo = defaultToDo;

// FUNCTIONS
function storeLocal(todoList) {
  localStorage.setItem("storedToDo", JSON.stringify(todoList));
}

function retrieveLocal() {
  console.log("default", defaultToDo.getProjectAtIndex(2).getTasks());
  const data = JSON.parse(localStorage.getItem("storedToDo"));

  if (data) {
    console.log("storedToDo", data);
    console.log(Object.entries(data)[0][1]);
    const newProjList = new ProjectList();
    Object.entries(data)[0][1].forEach((item, index) => {
      console.log(item.taskList);
      const newProject = new Project(item.name);
      console.log("item task", item.taskList);
      item.taskList.forEach((task) => {
        const newTask = new Task(task.name, task.date);
        if (task.isComplete) newTask.changeCompleteStatus();
        newProject.addTask(newTask);
      });
      // newProject.setTasks(item.taskList);
      console.log("new project", newProject);
      if (index > 1) newProjList.addProject(newProject);
    });

    console.log(newProjList);
    myToDo = newProjList;
  } else myToDo = defaultToDo; // If no stored data, use default
}

function openProjectForm() {
  addProjectBtn.classList.add("not-visible");
  projectFormContainer.classList.remove("not-visible");
}

function closeProjectForm() {
  projectInputField.value = "";
  addProjectBtn.classList.remove("not-visible");
  projectFormContainer.classList.add("not-visible");
}

function clearTaskForm() {
  taskTitleInput.value = "";
  taskDateInput.value = "";
  // taskPriorityInput.value = "";
}

function openTaskForm() {
  addTaskBtn.classList.add("not-visible");
  taskFormContainer.classList.remove("not-visible");
}

function closeTaskForm() {
  addTaskBtn.classList.remove("not-visible");
  taskFormContainer.classList.add("not-visible");
  clearTaskForm();
}

// Check local storage
retrieveLocal();

function initializeWebsite() {
  updateProjectList();
  updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));
}

function updateProjectList() {
  // Clear existing project list
  document.querySelector(".project-list").remove();

  // Create new project list
  const projectList = makeElement("div", ["project-list"]);

  // Generate buttons for user project list
  const currentProjects = myToDo.getProjects();
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
      projectBtn.dataset.id = index;
      projectList.appendChild(projectBtn);
    }
  });

  // Add event listener to project list;
  projectContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest("button");
    if (!clicked) return;
    if (clicked.classList.contains("project-item")) {
      activeProjectIndex = e.target.closest("button").dataset.id;
      updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));
    }
  });

  userProjectContainer.prepend(projectList);
  // storeLocal(myToDo);
}

function updateProjectDisplay(project) {
  // Clear display
  document.querySelector(".list-container").remove();

  // Update title
  displayTitle.textContent = myToDo
    .getProjectAtIndex(activeProjectIndex)
    .getName();
  if (activeProjectIndex < 2) {
    deleteProjBtn.classList.add("not-visible");
  } else if (activeProjectIndex >= 2) {
    deleteProjBtn.classList.remove("not-visible");
  }

  // Create new list container
  const listContainer = makeElement("ul", ["list-container"]);
  // Create list items and append to list container
  const taskList = project.getTasks();
  taskList.forEach((task, index) => {
    const listItem = makeElement("li", ["list-item"]);
    listItem.dataset.id = index;

    // List item left side
    const listItemLeft = makeElement("div", ["list-item-left"]);
    listItemLeft.appendChild(makeElement("p", ["task-title"], task.getName()));
    if (task.getCompleteStatus())
      listItemLeft.insertAdjacentHTML(
        "afterbegin",
        '<i class="far fa-check-square"></i>'
      );
    else
      listItemLeft.insertAdjacentHTML(
        "afterbegin",
        '<i class="far fa-square"></i>'
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

    if (task.getCompleteStatus()) {
      listItem.style.color = "lightgray";
      listItem.querySelectorAll("p").forEach((item) => {
        item.classList.add("complete");
      });
    }

    listContainer.appendChild(listItem);
  });

  displayContainer.appendChild(listContainer);

  // Add event listener to list items
  listContainer.addEventListener("click", function (e) {
    const targetItem = e.target.closest("li").dataset.id;
    // Delete item
    if (e.target.classList.contains("fa-trash-alt")) {
      myToDo
        .getProjectAtIndex(activeProjectIndex)
        .removeTaskAtIndex(targetItem);
      updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));
    }
    // Mark complete
    else if (
      e.target.classList.contains("fa-square") ||
      e.target.classList.contains("fa-check-square")
    ) {
      myToDo
        .getProjectAtIndex(activeProjectIndex)
        .getTaskAtIndex(targetItem)
        .changeCompleteStatus();
      updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));
    }
    storeLocal(myToDo);
  });

  // storeLocal(myToDo);
}

// EVENT LISTENERS
// Add project
addProjectBtn.addEventListener("click", openProjectForm);
projectCancelBtn.addEventListener("click", closeProjectForm);
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newProject = projectInputField.value;
  if (myToDo.checkProjectName(newProject))
    myToDo.addProject(new Project(newProject));
  else alert(`${newProject} already in use.`);
  closeProjectForm();
  updateProjectList();
  storeLocal(myToDo);
});

// Delete project
deleteProjBtn.addEventListener("click", function () {
  console.log("Delete project", myToDo.getProjectAtIndex(activeProjectIndex));
  myToDo.removeProject(myToDo.getProjectAtIndex(activeProjectIndex));
  activeProjectIndex--;
  updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));
  updateProjectList();
  storeLocal(myToDo);
});

// Add task form
addTaskBtn.addEventListener("click", openTaskForm);
taskCancelBtn.addEventListener("click", closeTaskForm);

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = new Task(taskTitleInput.value, taskDateInput.value);

  myToDo.getProjectAtIndex(activeProjectIndex).addTask(newTask);
  closeTaskForm();
  updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));
  storeLocal(myToDo);
});

export { initializeWebsite };
