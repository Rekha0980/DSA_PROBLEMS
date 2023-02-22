// i/p                        o/p   2 0 3
// 5 5 3
// 1 1 0 0 0
// 1 1 1 1 0
// 1 0 0 0 0
// 1 1 0 0 0
// 1 1 1 1 1


function week(mat,n,m,k){
    let stack=[]
    for(let i=0;i<n;i++){
        let fauji=0;
        for(let j=0;j<m;j++){
            if(mat[i][j]==1){
                fauji++
            }
        }
        stack.push(fauji)
    }
    let index=[]
    for(let i=0;i<n;i++){
        index.push(i)
    }
    
    
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(stack[j]>stack[j+1]){
                let t=stack[j]
                stack[j]=stack[j+1]
                stack[j+1]=t
                let t2=index[j]
                index[j]=index[j+1]
                index[j+1]=t2
            }
        }
    }
    //console.log(index)
    let ans=[]
    for(let i=0;i<k;i++){
        ans.push(index[i])
    }
    console.log(ans.join(" "))
}


function runProgram(input){
input=input.split("\n")
let mat=[]
let [n,m,k]=input[0].split(" ").map(Number)
for(let i=1;i<=n;i++){
    mat.push(input[i].split(" ").map(Number))
}
week(mat,n,m,k)
    
    
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