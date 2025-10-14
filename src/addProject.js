import { saveProjectToStorage, createProjectButton } from './projectStorage.js';

export function loadAddProject(menu) {
    const main = document.getElementById('main');

    if (document.querySelector('.newProjectForm')) return;

    const formContainer = document.createElement('div');
    formContainer.classList = 'formContainer';

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');
    form.classList = 'newProjectForm';

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'project_title');
    titleLabel.textContent = 'Project Title';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'project_title';
    titleInput.name = 'project_title';
    titleInput.placeholder = 'Enter Here...';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Save';

    main.appendChild(formContainer);
    formContainer.appendChild(form);
    form.appendChild(titleLabel, titleInput, submitBtn);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = titleInput.value.trim();
        if (!title) return;
        saveProjectStorage(title);
        createProjectButton(title, menu);
        formContainer.remove();
    })
}