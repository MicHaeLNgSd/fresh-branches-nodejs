class Component {
  render() {
    return 'component is rendered';
  }
}

const sum = (...nums) => nums.reduce((acc, num) => acc + num);
const substract = (...nums) => nums.reduce((acc, num) => acc - num);
const multiply = (...nums) => nums.reduce((acc, num) => acc * num);
const divine = (...nums) => nums.reduce((acc, num) => acc / num);

// by default
export default Component;

// by name
export { sum, substract, multiply, divine };
