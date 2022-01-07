
const sortAscArray = (array) => {
  array.sort();
};

const getRandomValue = (array) => {
  array[Math.floor(Math.random() * array.length)];
};

module.exports = {
  sortAscArray,
  getRandomValue,
}