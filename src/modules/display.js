"use strict";

import { projectList } from "./projects";
import { makeElement } from "./element";

// Elements
const displayContainer = document.querySelector(".list-display-container");

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

// Store projects in object
const testList = [
  { "Project 1": [item1, item2, item1, item2, item1, item2] },
  { "Project 2": [item3] },
];

const project = testList[0];
console.log(project);
const [title] = Object.keys(project);
const [list] = Object.values(project);

console.log(title);
console.log(list[1]);

// This module will need to import to key for the project

function generateDisplay(project) {
  // Clear display container
  [...displayContainer.children].forEach((child) =>
    displayContainer.removeChild(child)
  );

  // How to get project name here...
  displayContainer.appendChild(makeElement("h2", ["list-header"], title));

  addListEventListener(project);
  displayContainer.appendChild(updateListContainer(project));
}

// How do I get the name of the project here...
// function generateDisplayHeader(header) {
//   const displayHeader = makeElement("h2", ["list-header"], "header");

//   return displayHeader;
// }

// Change name to updateDisplay
function updateListContainer(project) {
  const listContainer = makeElement("ul", ["list-container"]);

  // for (const [index, item] in Object.entries(project)) {
  //   console.log(`${index}: ${item}`);
  // // project.forEach((item, index) => {
  // const listItem = makeElement("li", ["list-item"]);
  // listItem.dataset.id = index;
  // const listItemMain = makeElement("div", ["list-item-main"]);
  // // Add icon with insertAdjacentHTML so HTML is parsed
  // const itemLeft = makeElement("div", ["item-left"]);
  // if (item.complete === true)
  //   itemLeft.insertAdjacentHTML(
  //     "afterbegin",
  //     '<i class="far fa-check-square"></i>'
  //   );
  // else
  //   itemLeft.insertAdjacentHTML(
  //     "afterbegin",
  //     '<i class="far fa-square"></i>'
  //   );
  // const taskTitle = makeElement("p", ["task-title"], item.title);
  // itemLeft.appendChild(taskTitle);
  // listItemMain.appendChild(itemLeft);
  // const itemRight = makeElement("div", ["item-right"]);
  // const date = makeElement("p", ["task-date"], item.dueDate);
  // itemRight.appendChild(date);
  // itemRight.insertAdjacentHTML(
  //   "beforeend",
  //   '<i class="far fa-trash-alt"></i>'
  // );
  // listItemMain.appendChild(itemRight);
  // listItem.appendChild(listItemMain);
  // const notes = makeElement(
  //   "p",
  //   ["list-item-notes", "not-visible"],
  //   item.description
  // );
  // listItem.appendChild(notes);
  // listContainer.appendChild(listItem);
  // // Modify display if item completed (separate function)
  // if (item.complete === "true") {
  //   // Put check mark in box
  //   document.querySelector(".complete-marker").classList.remove("fa-square");
  //   document
  //     .querySelector(".complete-marker")
  //   //     .classList.add("fa-check-square");
  //   // }
  // }

  return listContainer;
}

function addListEventListener(project) {
  displayContainer.addEventListener("click", function (e) {
    console.log(e.target);
    // const clicked = e.target.closest(".list-item");
    // if (!clicked) return;
    // console.log(clicked);

    if (e.target.classList.contains("far")) {
      e.target.classList.toggle("fa-square");
      e.target.classList.toggle("fa-check-square");
      // Use data attribute to identify clicked item
      const clickedIndex = e.target.closest(".list-item").dataset.id;
      project[clickedIndex].complete = true;
      console.log(project[clickedIndex]);
    }
  });
}

// generateDisplay(project);

export default generateDisplay;
