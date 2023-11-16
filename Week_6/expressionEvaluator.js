function splitter(expression){
operator = expression.match(/[+\-*/]/)[0];
splitted = expression.split(/[+\-*/]/);
operand1 = splitted[0];
operand2 = splitted[1];
res = [];
res.push(operand1);
res.push(operand2);
res.push(operator);
return res;
}

const operators = {
'+': (a, b) => a+b,
'-': (a, b) => a-b,
'*': (a, b) => a*b,
'/': (a, b) => a/b
};

function evaluator(expression){
let arr = splitter(expression);
let res;

res = operators[arr[2]](parseInt(arr[0]), parseInt(arr[1])); 

return res;
}

console.log(evaluator("4+5"));