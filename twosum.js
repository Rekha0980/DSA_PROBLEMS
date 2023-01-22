function  twosum(n,k,arr){
    let left=0;
    let right=n-1
    while(left<right){
        var sum=arr[left]+arr[right]
        if(sum==k){
            console.log(left,right)
            break;
        }
        else if(sum>k){
            right--
        }
        else{
            left++
        }
    }
    if(sum!=k){
        console.log(-1,-1)
    }
}


twosum(4, 9,[2 ,7 ,11 ,15])