import { Project } from "./project";
import { format, compareAsc, parseISO } from "date-fns";

class ProjectList {
  constructor() {
    this.projectList = [];
    this.projectList.push(new Project("Today"));
    this.projectList.push(new Project("Week"));
  }

  getProjects() {
    return this.projectList;
  }

  getProject(projectName) {
    return this.projectList.find(
      (project) => project.getName() === projectName
    );
  }

  getProjectAtIndex(index) {
    return this.projectList[index];
  }

  checkProjectName(name) {
    if (!this.projectList.map((project) => project.name).includes(name))
      return true;
  }

  addProject(project) {
    if (this.projectList.includes(project)) return;
    this.projectList.push(project);
  }

  removeProject(project) {
    this.projectList = this.projectList.filter((item) => item !== project);
  }

  updateTodayList() {
    this.getProject("Today").taskList = [];
    console.log(this.getProject("Today"));
  }
}

export { ProjectList };
