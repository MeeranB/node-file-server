const fs = require("fs");
const path = require("path");

function publicHandler(request, response) {
  const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpg",
  };
  const urlArray = request.url.split(".");
  const extension = urlArray[1];
  const type = types[extension];
  response.writeHead(200, { "content-type": type });
  const fileName = request.url.split("/")[2];
  const filePath = path.join(__dirname, "..", "public", fileName);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
    } else {
      response.end(file);
    }
  });
}

module.exports = publicHandler;
