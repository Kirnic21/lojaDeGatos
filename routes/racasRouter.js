const { Router } = require("express");
const racaController = require("../controllers/racasController");
const racasRouter = Router();

// Route to list all "racas"
racasRouter.get("/", racaController.racaList);

// Routes to create a new "raca"
racasRouter.get("/racaCreate", racaController.racaCreateGet);
racasRouter.post("/racaCreate", racaController.racaCreatePost);

// Routes to update an existing "raca"
racasRouter.get("/:id/racaUpdate", racaController.racaUpdateGet);
racasRouter.post("/:id/racaUpdate", racaController.racaUpdatePost);
racasRouter.get("/:raca/gatosList", racaController.racaGatoList);
racasRouter.post("/:raca/racaDelete",racaController.racaGatoDelete)
// Export the correct router
module.exports = racasRouter;
