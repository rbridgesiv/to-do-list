import './styles.css';
import { loadAddProject } from './addProject.js';

const addProjectBtn = document.getElementById('addProject');

addProjectBtn.addEventListener ('click', () => {
    loadAddProject();
})