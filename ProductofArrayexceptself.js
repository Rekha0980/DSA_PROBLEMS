// input    
// 2
// 4
// 1 2 3 4
// 5
// -1 1 0 3 -3

function  pro(n,arr){
    let data=Array(n).fill(1)
    let flag=0
    let product=1
    for(let i=0;i<n;i++){
        data[i]=product
        product=product*arr[i]
    }
    //console.log(prod)
    product=1
    for(let j=n-1;j>=0;j--){
        data[j]=data[j]*product
        product=product*arr[j]
    }
    console.log(data.join(" "))
}

function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1
for(let i=0;i<tc;i++){
    let n=+input[line]
    line++
    let arr=input[line].split(" ").map(Number)
    line++
    pro(n,arr)
}
    
    
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