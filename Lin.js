let arr =[1,2,3,4,5,6,7,80]
let target=4;
function lenar(arr){
    for(let i =0;i<arr.length;i++) {
        if(arr[i]==target) {
            return i;
        }
    }
    return -1
}
console.log(lenar(arr));

