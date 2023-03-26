// ip  4 8 7 6 4 2 4 4 1 2   op  4 4 4
function  mmm(n,arr){
     let bag=""
    let sum=0
    
    for(let i=0;i<n;i++){
        sum=sum+arr[i]
    }
    bag=bag+Math.floor(sum/n)+" "
    //console.log(bag)
  
    arr.sort(function(a,b){
        return a-b
    })
    //console.log(arr)
    let med
    //console.log(arr.length)
    if(arr.length%2==0){
         med=(arr[arr.length/2]+arr[(arr.length/2)-1])/2
    }
    if(arr.length%2!=0){
         med=arr[Math.floor(arr.length/2)]
    }
    
    
    bag=bag+Math.floor(med)+" "
    //console.log(bag)
      let obj={}
    for(let i=0;i<n;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]]=obj[arr[i]]+1
        }
    }
    //console.log(obj)
    let max=-Infinity
    for(let key in obj){
        if(obj[key]>max){
            var mode=+key
            max=obj[key]
        }
    }
    bag=bag+mode
    console.log(bag)
}



function runProgram(input){
input=input.split("\n")
let tc=+input[0]
let line=1
for(let i=0;i<tc;i++){
    let n=+input[line]
    line++
    let arr=input[line].split(" ").map(Number)
    line++
    mmm(n,arr)
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