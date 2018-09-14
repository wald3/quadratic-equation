module.exports = function solveEquation(equation) {
  // your implementation
  //let priority = new Array({'sign':'^', cost: 0}, {'sign':'*', cost: 1}, {'sign':'/', cost: 2}, {'sign':'+', cost: 3}, {'sign':'-', cost: 4});
  let a = equation.split(' ');



  // Discriminant
  let D = eval("Math.pow(" + a[3] + a[4] + ", 2) - 4 *" + a[0] + " * "  + a[7] + a[8]);
  let answers = [];
  answers[1] =  Math.round( eval("(-1 * " + a[3] + a[4] + " - Math.sqrt(D))" + " / (2 *" + a[0] + ")") );
  answers[0] =  Math.round( eval("(-1 * " + a[3] + a[4] + " + Math.sqrt(D))" + " / (2 *" + a[0] + ")") );

  return answers.sort(costCompare);
}

function costCompare(a, b){
  return a - b;
}