// i/p 
// 2
// 6
// foobar o              o/p 33
// 4
// jjjj k                     0


function  percent(str,n){
    let s=str[0]
    let c=str[1]
      let obj={}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1
        }
        else{
            obj[s[i]]=obj[s[i]]+1
        }
    }
    let d=0
    for(let key in obj){
        if(key==c){
             d=obj[key]
        }
        
    }
    let per=Math.floor((d/s.length)*100)
    console.log(per)
    
}


function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1
for(let i=0;i<tc;i++){
    let n=+input[line]
    line++
    let str=input[line].split(" ")
    line++
    percent(str,n)
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