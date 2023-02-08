// input 2   output YES
// 2                NO
// 3 5
// 3 6
// 3
// 6 8 9
// 6 10 12

function  bucket(n,arr1,arr2){
    arr2=arr2.sort((a,b)=>b-a)
    let buc=arr2[0]+arr2[1]
    let c=0
    for(var i=0;i<n;i++){
        c=c+arr1[i]
    }
    if(buc>=c){
        console.log("YES")
    }
    else{
        console.log("NO")
    }

    
}

function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1;
for(let i=0;i<tc;i++){
    let n=+input[line]
    line++
    let arr1=input[line].split(" ").map(Number)
    line++
    let arr2=input[line].split(" ").map(Number)
    line++
    bucket(n,arr1,arr2)
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