const { execFile } = require("child_process");
const path = require("path");

exports.handler = async (event) => {

  const url = event.queryStringParameters.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({error:"URL required"})
    };
  }

  const ytdlp = path.resolve("./bin/yt-dlp");

  return new Promise((resolve) => {

    execFile(ytdlp, ["-j", url], (err, stdout, stderr) => {

      if (err) {
        resolve({
          statusCode: 500,
          body: JSON.stringify({error:stderr})
        });
        return;
      }

      resolve({
        statusCode: 200,
        body: stdout
      });

    });

  });

};