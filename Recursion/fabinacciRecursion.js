// input 4  output 3
function fib(n){
    if(n==1|| n==0){
        return n
    }
    
    return fib(n-1)+fib(n-2)
}


function runProgram(input){
input=input.split("\n")
let n=+input[0]
console.log(fib(n))
    
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}