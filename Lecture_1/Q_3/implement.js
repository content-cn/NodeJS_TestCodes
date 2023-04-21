const http = require("http");

const server = http.createServer((request, response) => {
  const message = "I am a Ninja";
  console.log(message);
  response.end(message);
});

server.listen(3000);

module.exports = server;
/* Explanation: The issue before was that was not sending any response back to 
the client. When a request is made to the server, it logs the "message" string 
to the console, but it doesn't do anything else.

To fix this, you need to use the response parameter in the server callback function 
to send a response back to the client. In this case, you can use the response.end() 
method to send the "message" string as a response. 
 */
