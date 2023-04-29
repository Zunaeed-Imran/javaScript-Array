let n = prompt("Enter any Number: ");
for (let i = 0; i < n; i++){
  document.write("<br>")
  for (let j = 0; j < i; j++){
    document.write(i+"\t");
  }
}