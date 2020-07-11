"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// const data = fs.readFileSync(__dirname + "/data.txt", "utf8");
// console.log(data);
// let startTime = new Date().getTime();
// fs.readFile(__dirname + "/data.txt", "utf8", function (err, data) {
//   let endTime = new Date().getTime();
//   console.log(data);
//   console.log(`Time taken : ${endTime - startTime} milliseconds`);
// });
var readableStream = fs_1.default.createReadStream(__dirname + "/data.txt", "utf8");
var writableStream = fs_1.default.createWriteStream(__dirname + "/data1.txt");
readableStream.pipe(writableStream);
// readableStream.on("data", function (chunk) {
//   console.log(chunk);
//   writableStream.write(chunk)
// });
