import $ from 'jquery';
import './style.css';

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'inner';
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());