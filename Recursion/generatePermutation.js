
// ip 1 2 3  op 1 2 3 
// 1 3 2 
// 2 1 3 
// 2 3 1 
// 3 1 2 
// 3 2 1

function  permutation(arr,index,ans){
    //console.log(ans)
      if(index==arr.length){
          ans.push(arr.join(""))
          //console.log(ans)
          return ans
      }
      for(let i=index;i<arr.length;i++){
         swap(arr,i,index)
          permutation(arr,index+1,ans);
          swap(arr,i,index);
         }
     
  }
  
  function swap(a,i,j){
      let temp=a[i]
      a[i]=a[j]
      a[j]=temp
  }
  
  
  function runProgram(input){
  input=input.split("\n")
      let n=+input[0]
      let arr=input[1].split(" ").map(Number)
      let index=0
      let ans=[]
    permutation(arr,index,ans)
    ans=ans.sort()
    for(let i=0;i<ans.length;i++){
        console.log(ans[i].split("").join(" "))
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