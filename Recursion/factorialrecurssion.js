// input 5  output 120

function factorial(n){
    let pro=1
    for(let i=n;i>0;i--){
        pro=pro*i
    }
    console.log(pro)
}


function runProgram(input){
input=input.split("\n")
let n=+input[0]
factorial(n)
    
    
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