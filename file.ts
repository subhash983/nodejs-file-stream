import fs from "fs";

// const data = fs.readFileSync(__dirname + "/data.txt", "utf8");

// console.log(data);

// let startTime = new Date().getTime();

// fs.readFile(__dirname + "/data.txt", "utf8", function (err, data) {
//   let endTime = new Date().getTime();
//   console.log(data);
//   console.log(`Time taken : ${endTime - startTime} milliseconds`);
// });

const readableStream = fs.createReadStream(__dirname + "/data.txt", "utf8");
const writableStream = fs.createWriteStream(__dirname + "/data1.txt");

readableStream.pipe(writableStream);

// readableStream.on("data", function (chunk) {
//   console.log(chunk);
//   writableStream.write(chunk)
// });
