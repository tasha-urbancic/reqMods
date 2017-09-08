function double(inp2) {
  return inp2 * 2;
}

function func1(inp1) {
  console.log(double(inp1));
  return double(inp1);
}

module.exports.func1 = func1;

// console.log(module.exports);


