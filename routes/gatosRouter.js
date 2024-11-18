const { Router, application } = require("express");
const gatoController = require("../controllers/gatosController");
const gatosRouter = Router();
gatosRouter.get("/",gatoController.gatoList)

gatosRouter.get("/gatosCreate",gatoController.gatoCreateGet)
gatosRouter.post("/gatosCreate",gatoController.gatoCreatePost)

gatosRouter.get("/:id/gatosUpdate", gatoController.gatoUpdateGet);
gatosRouter.post("/:id/gatosUpdate", gatoController.gatoUpdatePost);

module.exports = gatosRouter