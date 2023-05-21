let arr = [45, 6, 987, 95, 1, 36, 9, 44];
let max = arr[0];
for (let i = 1; i < arr.length; i++){
  if (max < arr[i]) {
    max = arr[i];
  }
}
document.write(max);