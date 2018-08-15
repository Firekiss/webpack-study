import {common} from './common';
import style from './style.css';

var man = {
    name: 'alex',
    age: 20
};

var sex = {
    sex: 'man'
};

$.extend(man, sex);

console.log(style)