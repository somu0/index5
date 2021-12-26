var arr=[]

var a=prompt("enter the first number")
 a=parseInt(a)
 arr.push(a)
var a=prompt("enter the second number")
 a=parseInt(a)
 arr.push(a)
var a=prompt("enter the third number")
 a=parseInt(a)
 arr.push(a)
 if(arr[0]>=arr[1]&&arr[0]>arr[2]){
 alert(arr[0]);
}else if(arr[1]>=arr[2]){
 alert(arr[1]);
}else{
 alert(arr[2]);
}

