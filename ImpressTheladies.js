// input            output 12
// 1
// 7 2
// 2 4 8 1 2 1 8

function impress(n,k,arr1){
    let sum=0;
    let j=0;
    for(let i=0;i<k;i++){
        sum=sum+arr1[i]
    }
    let max=sum
    for(let i=k;i<n;i++){
        sum=sum+arr1[i]
        sum=sum-arr1[i-k]
        max=Math.max(max,sum)
        
    }
    console.log(max)
    
}


function runProgram(input){
input=input.split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let[n,k]=input[line].split(" ").map(Number)
        line++
        let arr1=input[line].split(" ").map(Number)
        line++
    impress(n,k,arr1)
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