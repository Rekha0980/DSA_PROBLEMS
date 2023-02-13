
// ip 3   op  
// 1 
// 1 2 
// 1 2 3 
// 1 3 
// 2 
// 2 3 
// 3

function  oddsubset(arr,new_arr,index){
  
    if(new_arr.length!=0){
        //console.log(sum)
        console.log(new_arr.join(" "))
        
    }
    if(new_arr.length==0){
        console.log(" ")
    }
    if(index==arr.length){
        return
    }
    for(let i=index;i<arr.length;i++){
        
         new_arr.push(arr[i])
        
        oddsubset(arr,new_arr,i+1)
      new_arr.pop()
    }
   
}

function runProgram(input){
input=input.split("\n")
    let n=+input[0]
    let arr=[]
  for(let i=1;i<=n;i++){
      arr.push(i)
  }
    let index=0
    let new_arr=[]
    //console.log(arr)
  oddsubset(arr,new_arr,index)
    
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