"use strict";

import "./style.css";
import { generateProjectList, projectList } from "./modules/projects";
import generateDisplay from "./modules/display";

generateProjectList();
generateDisplay(projectList["Project 1"]);
