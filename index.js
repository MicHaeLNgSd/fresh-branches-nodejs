const sum = (...nums) => nums.reduce((acc, num) => acc + num);
const numbers = [10, 16, 41, -52, 51, 65, 4, 89, 64, 8];
console.log(sum(...numbers));
