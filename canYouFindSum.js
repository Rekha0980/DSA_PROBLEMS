// input                   output -2 0 6 1 3 
// 5
// 5 4 1 3 2


function sum(n,arr){
    let x=[]
    let data=[]
    for(let i=0;i<n;i++){
        while(data.length>0 && arr[i]>=arr[data[data.length-1]]){
            data.pop()
        }
        if(data.length==0){
            x.push(-1)
        }
        else{
            x.push(data[data.length-1]+1)
        }
        data.push(i)
    }
    
       let y=[]
    let data1=[]
    for(let i=n-1;i>=0;i--){
        while(data1.length>0 && arr[i]>=arr[data1[data1.length-1]]){
            data1.pop()
        }
        if(data1.length==0){
            y.push(-1)
        }
        else{
            y.push(data1[data1.length-1]+1)
        }
        data1.push(i)
    }
    y=y.reverse()
    let ans=[]
    for(let j=0;j<n;j++){
        ans.push(x[j]+y[j])
    }
    console.log(ans.join(" "))
}






function runProgram(input){
input=input.split("\n")
    let n=+input[0]
    let arr=input[1].split(" ").map(Number)
    sum(n,arr)

    
    
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