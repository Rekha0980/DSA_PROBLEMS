// input    output yes
// 5
// 5 1 2 4 3 
// 0


function side(n,arr){
    let stack=[]
    let count=1
    for(let i=0;i<n;i++){
        stack.push(arr[i])
        while(stack.length>0 && stack[stack.length-1]==count){
            count++
            stack.pop()
        }}
    if(count==n+1){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}

function runProgram(input){
input=input.split("\n")
let line=0
for(i=0;i<Math.floor(input.length/2);i++){
    let n=+input[line++]
    let arr=input[line++].trim().split(" ").map(Number)
side(n,arr)
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