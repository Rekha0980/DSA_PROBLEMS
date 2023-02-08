// input     otput  4
// 1
// 6
// 1 2 2 3 4 5
// 4 4 3 2 1 1


function two(n,arr1,arr2){
    let i=0;
    let j=n-1
    let count=0;
    while(i<n && j>=0){
        if(arr1[i]===arr2[j]){
            count++
            i++
            j--
        }
        else if(arr1[i]>arr2[j]){
            j--
        }
        else{
            i++
        }
    }
    console.log(count)
}



function runProgram(input){
input=input.split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let n=+input[line]
        line++
        let arr1=input[line].split(" ").map(Number)
        line++
        let arr2=input[line].split(" ").map(Number)
        line++
    two(n,arr1,arr2)
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