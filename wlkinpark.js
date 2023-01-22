let n=3 
let m=4
let mat=[[R,R,D,R]
[L,L,U,D]
[L,L,L,L]]


let i=0;
    let j=0;
    let count=0
    while(i>=0 && j>=0 && i<n && j<m){
        if(mat[i][j]=="v"){
            break;
        }
         if(mat[i][j]=="R"){
             mat[i][j]="v"
            count++
             j++
    
        }
        else if(mat[i][j]=="D"){
             mat[i][j]="v"
            count++
             i++
    
        }
           else if(mat[i][j]=="U"){
             mat[i][j]="v"
            count++
              i--
    
        }
          else if(mat[i][j]=="L"){
             mat[i][j]="v"
            count++
            j--
    
        }
    }
    console.log(count)