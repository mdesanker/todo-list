import { makeElement } from "./element";

const taskForm = document.querySelector(".task-form-container");

const openTaskForm = () => {
  taskForm.classList.remove("not-visible");
};

const closeTaskForm = () => {
  taskForm.classList.add("not-visible");
};

function generateAddTaskBtn() {
  const addTaskBtn = makeElement(
    "button",
    ["tab-btn", "add-task-btn"],
    "Add Task"
  );
  addTaskBtn.insertAdjacentHTML("afterbegin", '<i class="fas fa-plus"></i>');

  addTaskBtn.addEventListener("click", function () {
    openTaskForm();
    addTaskBtn.classList.add("not-visible");
  });

  return addTaskBtn;
}

export { generateAddTaskBtn };
