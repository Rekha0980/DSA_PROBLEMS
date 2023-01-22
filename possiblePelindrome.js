let str="carerca"
let obj={}
for(let i=0;i<str.length;i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=1
    }
    else{
        obj[str[i]]=obj[str[i]]+1
    }
}
let count=0
for(var key in obj){
    if(obj[key]%2!=0){
        count++
    }
}
if(count>1){
    console.log("No")
}
else{
    console.log("Yes")
}