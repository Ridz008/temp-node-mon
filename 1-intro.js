
// --------------- FS Asynchronous -----------------
const { readFile, writeFile } = require("fs");

console.log("Start")
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("in bet")
    writeFile(
        "./content/result-async.txt",
        `Here is the result: ${first} \n${second}`,
        {flag: 'a'},
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        }
      );
  });

  
});
console.log("End")
// --------------- FS Synchronous -----------------
// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// console.log(`F: ${first} \n${second}`);

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first} \n${second}`,
//   {flag:'a'}
// );

// const path = require('path');

// console.log(path.basename)

// -------------------- OS MODULE ------------------
// const os = require('os');

// const user = os.platform()
// console.log(user)
