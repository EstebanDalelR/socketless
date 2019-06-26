// First, turn the API into a ClientServer object
const API = require("../demo/API.js");
const { generateClientServer } = require("../src/generate-client-server.js");
const ClientServer = generateClientServer(API);

// Then create a server using the ClientServer object
// and a handler class for the server's side of the API:
const ServerClass = require("../demo/Server.js");
const server = ClientServer.createServer(ServerClass);

// And then start the server, so clients can connect.
server.listen(8080, () => console.log(`index> server listening on http://localhost:8080`));