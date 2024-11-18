
const express = require("express");
const { body, validationResult } = require("express-validator");
const path = require("node:path");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
const indexRouter = require("./routes/index")
const gatosRouter = require("./routes/gatosRouter")
const racasRouter = require("./routes/racasRouter")
app.use(express.urlencoded({ extended: true }))
app.use("/",indexRouter)
app.use("/gato",gatosRouter)
app.use("/raca",racasRouter)
const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
