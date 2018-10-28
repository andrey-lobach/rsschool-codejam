function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

module.exports = function make(...arg1) {
  let args = [];
  args = args.concat(Array.from(arg1));
  const curry = (...arg2) => {
    if (isFunction(arg2[0])) {
      return args.reduce(arg2[0]);
    }
    args = args.concat(Array.from(arg2));
    return curry;
  };
  return curry;
};

