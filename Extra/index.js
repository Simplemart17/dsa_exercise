// // process logs
// function processLogs(logs, threshold) {
//   // Write your code here.
//   const hash = {};
//   const result = [];
//   for (let i = 0; i < logs.length; i++) {
//     const [ip, time] = logs[i].split(' ');
//     if (hash[ip] === undefined) {
//       hash[ip] = time;
//     } else {
//       hash[ip] = Math.max(hash[ip], time);
//     }
//   }

//   for (let key in hash) {
//     if (hash[key] - threshold > 0) {
//       result.push(key);
//     }
//   }

//   return result;
// }