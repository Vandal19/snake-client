const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.42",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection to the game server successfully establish");
      conn.write('Name: Mvg')
  })

  conn.on("data", () => {
    console.log("you ded cuz you idled")
  });

  return conn;
};

module.exports = connect