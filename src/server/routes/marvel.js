const https = require('https');

https.get('https://gateway.marvel.com:443/v1/public/characters?apikey=58647ea11b49b3e34ebcfc28685d0ef7', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});