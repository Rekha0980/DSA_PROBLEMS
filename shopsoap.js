// i/p                   o/p
// 5                       1
// 1 4 10 5 6              1
// 4                       2
// 2                       5
// 3
// 5
// 11


function shop(n,q,arr,mat) {
    for(let i=0;i<q;i++){
        let k=mat[i]
        console.log(iterate(arr,0,n,k))
    }
}

function iterate(a,l,h,el){
    let out=0;
    while(l<=h){
        mid=Math.floor(l+(h-l)/2)
        if(a[mid]<el){
            out=mid+1
        }
         if(a[mid]<el){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return out
}


function runProgram(input){
input=input.split("\n")
let n=+input[0]
let arr=input[1].trim().split(" ").map(Number)
let q=+input[2]
let line=3;
let mat=[]
for(let i=0;i<q;i++){
    mat.push(+input[line])
    line++
}
arr.sort(function(a,b){
    return a-b
})
 shop(n,q,arr,mat)   
    
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