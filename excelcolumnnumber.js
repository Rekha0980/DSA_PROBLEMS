// i/p
// 3
// A                         1
// AB                        28
// ZY                        701
function  excel(str){
    let res=0;
    let n=str.length
    for(let i=0;i<n;i++){
        res=res+(str.charCodeAt(i)-64)*Math.pow(26,n-(i+1))
    }
    console.log(res)
}



function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1
for(let i=0;i<tc;i++){
    let str=input[line]
    line++
    excel(str)
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