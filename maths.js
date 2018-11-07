module.exports = add;

function add(num1, num2, log) {
  var result = num1 + num2;
  log(result);
  return result;
}
