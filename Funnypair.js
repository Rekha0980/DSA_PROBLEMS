// i/p
// 3
// 4
// 2 2 3 4              2
// 6
// 1 2 2 3 3 3          3
// 5
// 2 2 2 3 3           -1




function funny(n,arr){
    let obj={}
    for(let i=0;i<n;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]]=obj[arr[i]]+1
        }
    }
    let flag=false
    let max=-1
    for(let key in obj){
        if(obj[key]==+key){
            if(+key>max){
             max=+key
             flag=true
            }
            
        }
        
    }
    console.log(max)
    
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
    funny(n,arr)
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