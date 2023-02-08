// input
// 2
// 3 1
// 1 0 1
// 3 1
// 1 1 0


function cont(n,k,arr){
    let obj={}
    let ans="NO"
    for(let i=0;i<n;i++){
        let key=arr[i]
        if(obj[key]===undefined){
            obj[key]=i
        }
        else{
            if(Math.abs(obj[key]-i)<=k){
                ans="YES"
                break;
            }
        }
    }
    console.log(ans)
    
}




function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1
for(let i=0;i<tc;i++){
    let[n,k]=input[line].split(" ").map(Number)
    line++
    let arr=input[line].split(" ").map(Number)
    line++
    cont(n,k,arr)
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