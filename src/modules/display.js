"use strict";

import { projectList } from "./projects";
import { makeElement } from "./element";

// Elements
const displayContainer = document.querySelector(".list-display-container");

// This module will need to import to key for the project

const project = projectList["Project 1"];
console.log(project);

const title = "Project 1";
project[1].complete = true;

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

  project.forEach((item, index) => {
    const listItem = makeElement("li", ["list-item"]);
    listItem.dataset.id = index;

    const listItemMain = makeElement("div", ["list-item-main"]);

    // Add icon with insertAdjacentHTML so HTML is parsed
    const itemLeft = makeElement("div", ["item-left"]);
    if (item.complete === true)
      itemLeft.insertAdjacentHTML(
        "afterbegin",
        '<i class="far fa-check-square"></i>'
      );
    else
      itemLeft.insertAdjacentHTML(
        "afterbegin",
        '<i class="far fa-square"></i>'
      );

    const taskTitle = makeElement("p", ["task-title"], item.title);
    itemLeft.appendChild(taskTitle);
    listItemMain.appendChild(itemLeft);

    const itemRight = makeElement("div", ["item-right"]);
    const date = makeElement("p", ["task-date"], item.dueDate);
    itemRight.appendChild(date);
    itemRight.insertAdjacentHTML(
      "beforeend",
      '<i class="far fa-trash-alt"></i>'
    );
    listItemMain.appendChild(itemRight);
    listItem.appendChild(listItemMain);

    const notes = makeElement(
      "p",
      ["list-item-notes", "not-visible"],
      item.description
    );
    listItem.appendChild(notes);

    listContainer.appendChild(listItem);

    // Modify display if item completed (separate function)
    if (item.complete === "true") {
      // Put check mark in box
      document.querySelector(".complete-marker").classList.remove("fa-square");
      document
        .querySelector(".complete-marker")
        .classList.add("fa-check-square");
    }
  });

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

{
  /* <li class="list-item">
              <div class="list-item-main">
                <div class="item-left">
                  <i class="far fa-check-square"></i>
                  <p class="task-title">Wash the dishes</p>
                </div>
                <div class="item-right">
                  <p class="task-date">10/14/21</p>
                  <i class="far fa-trash-alt"></i>
                </div>
              </div>
              <p class="list-item-notes visible">
                These are notes for the list item.
              </p>
            </li> */
}

export default generateDisplay;
