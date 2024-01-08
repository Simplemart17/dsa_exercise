const fs = require("fs");

function decode(file) {
  // read the file and parse it
  const fileData = fs.readFileSync(file, "utf8", (_err, data) => data);
  
  let fileMap = {};
  let fileMapIndexArray = [];
  let lastPyramidLineNumber = [];
  let decoded = "";

  // map through the file data, splitting each element and creating a new file map
  // push all the keys in the file to a new fille index array
  fileData.split("\n").map((data) => {
    const [key, value] = data.trim().split(' ');
    fileMap[key] = value;
    fileMapIndexArray.push(key);
  });

  // create a pyramid from the fileMapIndexArray and store the last number from each file into another array
  const sortedFileMapIndexArray = fileMapIndexArray.sort((a,b) => a - b);
  let currIndex = 0;

  for (let i = 1; i <= Math.sqrt(2 * sortedFileMapIndexArray.length); i++) {
    for (let j = 1; j <= i; j++) {
      currIndex++;
      
      if (j === i) {
        lastPyramidLineNumber.push(sortedFileMapIndexArray[currIndex - 1]);
      }
    }
  }

  // loop through the last pyramid line number and get the corresponding value from tne file map
  for (let i = 0; i < lastPyramidLineNumber.length; i++) {
    decoded += fileMap[lastPyramidLineNumber[i]] + " ";
  }

  return decoded;
}

const filePath = "DecodeFile/coding_qual_input.txt";
console.log(decode(filePath));
