function powerOf2(num) {
  if (num < 1) {
    console.log(0, '???');
    return 0;
  } else if (num === 1) {
    console.log(1);
    return 1;
  } else {
    let prev = powerOf2(num/2);
    let curr = prev * 2;
    console.log(curr);
    return curr;
  }
}

powerOf2(12);