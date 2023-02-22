// i/p
// 2
// 5
// 5 5 5 10 20            YES       
// 5
// 5 5 10 10 20           NO


function  summer(n,arr){
    let f=0;
    let t=0;
    for(let i=0;i<n;i++){
        if(arr[i]==5){
            f++
        }
        else if(arr[i]==10){
            if(f>0){
                f--
                t++
                
            }
            else{
                return "NO"
            }
        }
        else{
           if(f>0 && t>0){
               f--
               t--
           } 
           else if(f>=3){
               f=f-3
           }
           else{
               return "NO"
           }
        }
    }
    return "YES"
    
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
  console.log(summer(n,arr))
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