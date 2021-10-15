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

  displayContainer.appendChild(generateDisplayHeader(title));
  displayContainer.appendChild(generateListContainer(project));
}

// How do I get the name of the project here...
function generateDisplayHeader(header) {
  const displayHeader = document.createElement("h2");
  displayHeader.classList.add("list-header");

  // Set header to header argument
  displayHeader.textContent = header;

  return displayHeader;
}

function generateListContainer(project) {
  const listContainer = document.createElement("ul");
  listContainer.classList.add("list-container");

  for (const item of project) {
    console.log(item);
    const listItem = makeElement("li", ["list-item"], item.title);

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
