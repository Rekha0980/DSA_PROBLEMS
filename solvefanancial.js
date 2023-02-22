// i/p
// 1
// 6
// 100 60 70 65 80 85          1 1 2 1 4 5

function financial(n,arr){
    let s=[]
    let r=[]
    r.push(1)
    s.push(0)
    for(let i=0;i<n;i++){
        while(s.length>0 && arr[s[s.length-1]]<=arr[i]){
            s.pop()
        }
        if(s.length===0){
            r[i]=i+1
        }
        else{
            r[i]=i-s[s.length-1]
        }
        s.push(i)
    }
    console.log(r.join(" "))
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
   financial(n,arr)
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