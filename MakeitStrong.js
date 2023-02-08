// input  output 18
// 4
// 1 2 4 8

function  strong(n,arr){
    arr=arr.sort((a,b)=>{
        return a-b
    })
    //console.log(arr)
    let i=0;
    let j=n-1
    let ans=0;
    let result=[]
    while(i<=j){
        if(i%2==0){
            result.push(arr[i])
            result.push(arr[j])
            i++
            j--
        }
        else{
            result.push(arr[i])
            result.push(arr[j])
            i++
            j--
        }
    }
    for(let i=0;i<n;i++){
        if(i<n-1){
            ans=ans+Math.abs(result[i]-result[i+1])
        }
        else{
            ans=ans+Math.abs(result[i]-result[0])
        }
    }
    console.log(ans)
}





function runProgram(input){
input=input.split("\n")
    let n=+input[0]
    let arr=input[1].split(" ").map(Number)
    strong(n,arr)
    
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