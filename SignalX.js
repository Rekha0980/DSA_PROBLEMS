// i/p                        o/p   True
// 4
// 2 0 0 1
// 0 2 1 0
// 0 1 9 0
// 6 0 0 3



function signal(mat,n){
    let t1=0
    let t2=0;
    let t3=0;
    let t4=0;
    for(let i=1;i<n;i++){
        if(mat[0][i]===0){
            t1++
        }
         if(mat[i][0]===0){
            t2++
        }
         if(mat[n-1][i]===0){
            t3++
        }
         if(mat[i][n-1]===0){
            t4++
        }
    }
    if(t1===n-2 && t2===n-2 && t3===n-2 && t4===n-2){
        console.log("True")
    }
    else{
        console.log("False")
    }
}


function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1
for(let i=0;i<tc;i++){
    let n=+input[line]
    line++
    let mat=[]
    for(let i=0;i<n;i++){
        mat.push(input[line].split(" ").map(Number))
        line++
    }
        
    signal(mat,n)
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