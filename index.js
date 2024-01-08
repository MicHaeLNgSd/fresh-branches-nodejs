// import componentUnic from './component.js';
import Component, { sum, substract, multiply, divine } from './component.js';
import _ from 'lodash';

const numbers = [10, 5];
console.log(sum(...numbers));
console.log(substract(...numbers));
console.log(multiply(...numbers));
console.log(divine(...numbers));

const comp1 = new Component();
console.log(comp1.render());

const randomLodash = _.random(0, 1, 0);
console.log(randomLodash);
