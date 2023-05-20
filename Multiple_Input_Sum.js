let num = new Array();
let sum = 0;
for (let i = 0; i < 5; i++){
  num[i] = parseInt(prompt("Enter a number: "));
}

for (let i = 0; i < 5; i++){
  sum = sum + num[i];
}
document.write(sum);