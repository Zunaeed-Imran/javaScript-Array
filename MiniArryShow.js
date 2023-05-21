let arr = [100, 56, 999, 5414, 4, 56, 32];
let min = arr[0];
for (let i = 1; i < arr.length; i++){
  if (min > arr[i]) {
    min = arr[i];
  } 
}
document.write(min);