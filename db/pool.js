const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "kirnic",
  database: "gatos",
  password: "9292Hugo",
  port: 5432 // The default port
});
module.exports = new Pool({
    connectionString: "postgresql://kirnic:9292Hugo@localhost:5432/gatos"
  });