
2
3
eff
arr
3
foo
bar

let obj={}
for(let i=0;i<str1.length;i++){
    if(obj[str1[i]]==undefined){
        obj[str1[i]]=1
    }
    else{
        obj[str1[i]]=obj[str1[i]]+1
    }
}

let arr=[]
for(let key in obj){
    arr.push(obj[key])
}
//console.log(arr)

let obj2={}
for(let i=0;i<str2.length;i++){
    if(obj2[str2[i]]==undefined){
        obj2[str2[i]]=1
    }
    else{
        obj2[str2[i]]=obj2[str2[i]]+1
    }
}

let arr1=[]
for(let key in obj2){
    arr1.push(obj2[key])
}
//console.log(arr1)
let count=0
for(let j=0;j<arr.length;j++){
if(arr[j]==arr1[j]){
    count++
}
}
if(count==arr.length){
console.log("Equivalent")
}
else{
console.log("Not Equivalent")
}