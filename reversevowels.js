// i/p
// 2
// abc                   abc
// abe                   eba
function reverse(str){
    let v=[]
    let c=[]
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e"|| str[i]=="i"||str[i]=="u"||str[i]=="o"){
            v.push(str[i])
        }
        
    }
    let m=v.length-1
    let bag=""
    for(let i=0;i<str.length;i++){
        if(v.includes(str[i])){
            bag=bag+v[m]
            m--
        }
        else{
            bag=bag+str[i]
        }
    }
    return bag
}




function runProgram(input){
input=input.split("\n")
let tc=+input[0]
 let line=1
for(let i=0;i<tc;i++){
    let str=input[line]
    line++
  console.log(reverse(str))
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