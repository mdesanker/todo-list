import { Project } from "./project";

class ProjectList {
  constructor() {
    this.projectList = [];
    this.projectList.push(new Project("Today"));
    this.projectList.push(new Project("Week"));
  }

  getProjects() {
    return this.projectList;
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
}

export { ProjectList };
