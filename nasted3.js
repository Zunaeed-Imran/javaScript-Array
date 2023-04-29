let n = prompt("Enter any Number: ");
let m = prompt("Enter any Symbol: ");

for (let i = 0; i < n; i++){
  document.write("<br>")
  for (let j = 0; j < i; j++){
    document.write(m+"\t");
  }
}