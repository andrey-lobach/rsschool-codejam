module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((currentSum, cur) => currentSum + cur);
  return arr.map(cur => sum - cur);
};
