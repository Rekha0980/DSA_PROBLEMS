// input 4 6
// abcd
// aebcrd            op yes

function check(m,n,str1,str2){
    //console.log(typeof m)
  let j=0;
  if(str1==""){
      console.log("YES")
  }
  for(let i=0;i<n;i++){
      if(str2[i]==str1[j]){
          j++
      }
    
  }
    if(j==m){
          console.log("YES")
      }
      else{
 console.log("NO")}

  
}



function runProgram(input){
input=input.split("\n")
let [m,n]=input[0].split(" ").map(Number)
let str1=input[1]
let str2=input[2]
check(m,n,str1,str2)
    
    
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