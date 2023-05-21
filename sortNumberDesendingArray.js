let arr = [152, 99, 6, 58, 412, 1, 5, 87, 98, 25, 66, 9];
let sort = arr.sort(function (a, b) {
  return b - a;
});
document.write(sort);