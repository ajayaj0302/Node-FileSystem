const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "Textfiles");

const timeStamp = new Date();
const txtOut = `File is created on ${timeStamp}`;

fs.writeFileSync(
  `${timeStamp.getDate()}-${timeStamp.getMonth()}-${timeStamp.getFullYear()}-${timeStamp.getHours()}-${timeStamp.getMinutes()}-${timeStamp.getSeconds()}.txt`,
  txtOut
);

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory");
  }
  files.forEach(function (file) {
    console.log(file);
  });
});
