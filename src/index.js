
exports.min = function min (arr) {
  if(arr === undefined || arr.length === 0) return 0;
  return Math.min(...arr);
}

exports.max = function max (arr) {
  if(arr === undefined || arr.length === 0) return 0;

  return Math.max(...arr);
}

exports.avg = function avg (arr) {
  if(arr === undefined || arr.length === 0) return 0;

  return arr.reduce((elem, n) => {
    return elem + n;
  }, 0) / arr.length;
}
