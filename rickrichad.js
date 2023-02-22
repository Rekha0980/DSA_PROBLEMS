// i/p
// 1
// 5
// 2 9 8 2 7           3 2

function rick(n,arr){
    let rk=arr[0]
    let rh=arr[n-1]
    let l=0;
    let r=n-1
    let t=1;
    let b=1;
    
    while(r-l!==1){
        if(rk<=rh*2){
            l++
            rk=rk+arr[l]
            t++
        }
        else{
            r--
            rh+=arr[r]
            b++
            
        }
    }
    console.log(t,b)
}




function runProgram(input){
input=input.split("\n")
  let tc=+input[0]
let line=1;
for(let i=0;i<tc;i++){
    let n=+input[line]
    line++
    let arr=input[line].split(" ").map(Number)
    line++
    rick(n,arr)
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