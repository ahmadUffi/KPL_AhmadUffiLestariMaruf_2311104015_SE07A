let arr = Array.from({ length: 50 }, (_, i) => i);

arr.forEach((num) => {
  if (num % 2 === 0 && num % 3 === 0) {
    console.log(`${num} #$#$`);
  } else if (num % 2 === 0) {
    console.log(`${num} ##`);
  } else if (num % 3 === 0) {
    console.log(`${num} $$`);
  } else {
    console.log(num);
  }
});
