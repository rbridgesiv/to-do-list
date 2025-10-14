// projectStorage.js

// Retrieve existing projects or create an empty array
export function getProjects() {
    return JSON.parse(localStorage.getItem('projects')) || [];
  }
  
  // Save a new project title
  export function saveProjectToStorage(title) {
    const projects = getProjects();
    projects.push({ title, todos: [] });
    localStorage.setItem('projects', JSON.stringify(projects));
  }
  
  // Create sidebar button
  export function createProjectButton(title, menu) {
    const btn = document.createElement('button');
    btn.textContent = title;
    btn.classList.add('project-btn');
    btn.addEventListener('click', () => {
      // later you can load todos here
      const main = document.getElementById('main');
      main.innerHTML = `<h2>${title}</h2>`;
    });
    menu.appendChild(btn);
  }
  
  // Load and render saved projects on startup
  export function loadProjectsFromStorage(menu) {
    const projects = getProjects();
    projects.forEach((proj) => {
      createProjectButton(proj.title, menu);
    });
  }
  