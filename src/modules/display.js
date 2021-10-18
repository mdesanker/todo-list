"use strict";

import { projectList } from "./projects";
import { makeElement } from "./element";

// Elements
const displayContainer = document.querySelector(".list-display-container");

// Generate todo list display
function generateDisplay(project) {
  // Clear display container
  [...displayContainer.children].forEach((child) =>
    displayContainer.removeChild(child)
  );

  // Extract title and list from project object
  const [projectTitle] = Object.keys(project);
  const [projectListItems] = Object.values(project);
  // console.log(projectListItems);

  // Update header for selected project
  const header = makeElement("h2", ["list-header"], projectTitle);
  displayContainer.appendChild(header);

  // Update todo list for selected project
  displayContainer.appendChild(updateListContainer(projectListItems));
}

// Change name to updateDisplay
function updateListContainer(projectItems) {
  const listContainer = makeElement("ul", ["list-container"]);

  // console.log(projectItems);
  projectItems.forEach((item, index) => {
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
  });
  return listContainer;
}

export default generateDisplay;
