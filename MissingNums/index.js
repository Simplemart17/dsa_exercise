// Find the number that occurs twice and the number that is missing and return them in the form of an array.
// Assumption: will only contain numbers repeating only twice
// Input: num = [1,2,2,4]
// Output: [2,3]

const findErrorNum = (num) => {
  let hashMap = {};
  const result = [];

  for (let i = 0; i < num.length; i++) {
    hashMap[num[i]] = hashMap[num[i]] ? hashMap[num[i]] + 1 : 1;
  }

  for (let i = 0; i < num.length; i++) {
    if (hashMap[num[i]] === 2 && !result.includes(num[i])) {
      result.push(num[i]);
    }
    if (hashMap[i + 1] === undefined) {
      result.push(i + 1);
    }
  }

  if (hashMap[result[0]] === undefined) {
    [result[0], result[1]] = [result[1], result[0]];
    return [result[0], result[1]];
  } else {
    return result;
  }
};

const findErrorNum1 = (num) => {
  const result = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1]) {
      result.push(num[i], num[i] + 1);
    }
  }
  return result;
};

console.log(findErrorNum([1, 2, 2, 4, 5, 5, 7, 8, 9, 9]));
console.log(findErrorNum1([1, 2, 2, 4, 5, 5, 7, 8, 9, 9]));
