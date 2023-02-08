// input 2                  output YES
// 2 2                             YES
// 1 2
// 2 1
// 3 4
// 1 2 3 4
// 5 1 2 3
// 9 5 1 2



function  top(mat,n,m){
    for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
        if(mat[i-1][j-1]!==mat[i][j]){
            return "NO"
        }
    }
    }
    
    return "YES"
}

function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1
for(i=0;i<tc;i++){
    let [n,m]=input[line].split(" ").map(Number)
    line++
    let mat=[]
    for(let j=0;j<n;j++){
        mat.push(input[line].split(" ").map(Number))
        line++
    }
 console.log(top(mat,n,m))
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