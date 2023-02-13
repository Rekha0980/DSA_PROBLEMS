// input 148 3   op 3

function runProgram(input){
    input=input.split("\n")
    let [n,k]=input[0].split(" ")
    let s=sum(n)
    s=s*k
    n=s
    while(n>9){
        n=sum(n)
    }
        console.log(n)
        
    }
    
    function sum(n){
        n=n.toString();
        let ans=0;
        for(let i=0;i<n.length;i++){
            ans=ans+Number(n[i])
        }
        //console.log(ans)
        return ans
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