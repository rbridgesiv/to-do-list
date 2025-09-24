import './styles.css';
import { loadAddList } from './addlist.js';

const addlistBtn = document.getElementById('addlist');

addlistBtn.addEventListener ('click', () => {
    loadAddList();
})