import './styles.css';
import { loadAddProject } from './addProject.js';
import { createProjectButton, loadProjectsFromStorage } from './projectStorage.js';

const addProjectBtn = document.getElementById('addProject');
const menu = document.getElementById('menu');

loadProjectsFromStorage(menu);

addProjectBtn.addEventListener ('click', () => {
    loadAddProject(menu);
})