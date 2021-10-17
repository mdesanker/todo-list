"use strict";

import { projectList } from "./projects";
import { makeElement } from "./element";
import { generateAddTaskBtn } from "./taskform";

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

  // Add new task button to end of each list
  displayContainer.appendChild(generateAddTaskBtn());
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
                  <i class="far fa-square"></i>
                  <p class="task-title">Wash the dishes</p>
                </div>
                <div class="item-right">
                  <p class="task-date">10/14/21</p>
                  <i class="far fa-trash-alt"></i>
                </div>
              </div>
              <p class="list-item-notes not-visible">
                These are notes for the list item.
              </p>
            </li> */
}

// generateDisplay(project);

export default generateDisplay;
