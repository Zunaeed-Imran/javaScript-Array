let i, j, temp,  array = [ 974, 6, 14, 56, 96, 88, 22, 4 ];
for (let i = 0; i < 8; i++){
  for (let j = 0; j < 8; j++){
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
for (let i = 0; i < 8; i++){
  document.write(array[i] + " ");
}