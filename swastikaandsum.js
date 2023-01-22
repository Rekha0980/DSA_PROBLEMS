let n=3
let m=5
let mat=
[[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15]]


let sum=0
    let sum1=0
    for(i=0;i<Math.floor(n/2);i++){
        sum=sum+mat[i][0]
    }
      for(i=0;i<m-1;i++){
        sum=sum+mat[Math.floor(n/2)][i]
    }
      for(i=Math.floor(n/2);i<n;i++){
        sum=sum+mat[i][m-1]
    }
    
     for(i=0;i<Math.floor(m/2);i++){
        sum1=sum1+mat[n-1][i]
    }
      for(i=n-1;i>0;i--){
        sum1=sum1+mat[i][Math.floor(m/2)]
    }
      for(i=Math.floor(m/2);i<m;i++){
        sum1=sum1+mat[0][i]
    }
    
    console.log(Math.abs(sum-sum1))