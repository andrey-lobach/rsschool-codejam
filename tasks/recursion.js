module.exports = function recursion(tree) {
  const array = [];
  function toArray(node, level) {
    if (array[level] === undefined) array[level] = [];
    array[level].push(node.value);
    if (node.left === undefined && node.right === undefined) return array;
    if (node.left !== undefined) toArray(node.left, level + 1);
    if (node.right !== undefined) toArray(node.right, level + 1);
    return array;
  }
  return toArray(tree, 0);
};
