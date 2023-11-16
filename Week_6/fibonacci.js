function fib(i, j){
    let numbers=[];
    numbers[0] = 1;
    numbers[1] = 1;
    for(let k=2; k<j; k++){
        numbers[k] = numbers[k-1] + numbers[k-2];
    }
    let res = [];
    for(let k=i-1; k<j; k++){
        res.push(numbers[k]);
    }
    return res;
}

console.log(fib(3, 7));