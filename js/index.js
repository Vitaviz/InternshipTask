const arr = [1,0,10,'0','1','',NaN,false,null,undefined, 'false','true'];

for (let i=0; i<arr.length; i++) {
    if (arr[i]) {
        console.log(arr[i]);
    }
}
