"use strict";

import projectList from "./projects";
import { makeElement } from "./element";

// Elements
const displayContainer = document.querySelector(".list-display-container");

// This module will need to import to key for the project

const title = "Project 1";

function generateDisplay(project) {
  // Clear display container
  [...displayContainer.children].forEach((child) =>
    displayContainer.removeChild(child)
  );

  // How to get project name here...
  displayContainer.appendChild(makeElement("h2", ["list-header"], "Project 1"));
  displayContainer.appendChild(generateListContainer(project));
}

// How do I get the name of the project here...
// function generateDisplayHeader(header) {
//   const displayHeader = makeElement("h2", ["list-header"], "header");

//   return displayHeader;
// }

function generateListContainer(project) {
  console.log(project);
  const listContainer = makeElement("ul", ["list-container"]);

  for (const item of project) {
    // console.log(item);
    const listItem = makeElement("li", ["list-item"]);
    const listItemMain = makeElement("div", ["list-item-main"]);

    // icon may need to add as insertAdjacentHTML
    const itemLeft = makeElement("div", ["item-left"]);
    itemLeft.insertAdjacentHTML("afterbegin", '<i class="far fa-square"></i>');
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

    listContainer.appendChild(listItem);
  }

  return listContainer;
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
