const { execFile } = require("child_process");
const path = require("path");

exports.handler = async () => {

  const ytdlp = path.resolve("./bin/yt-dlp");

  return new Promise((resolve) => {

    execFile(ytdlp, ["--version"], (err, stdout) => {

      resolve({
        statusCode: 200,
        body: JSON.stringify({
          version: stdout.trim()
        })
      });

    });

  });

};