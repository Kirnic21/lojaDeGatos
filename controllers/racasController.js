const db = require("../db/queries")
exports.racaList = async (req, res, next) => {
    const racas = await db.getAllRacas();
    res.render("racaList", { racas });
};

exports.racaCreateGet = (req, res) => {
    res.render("racaCreate");
};

exports.racaCreatePost = async (req, res) => {

    const {raca} = req.body
    
    await db.insertRaca(raca)
    res.redirect("/raca")
};

exports.racaUpdateGet = async (req, res) => {
    const racas = await db.getGato(req.params.id);
    if (!racas) {
        return res.status(404).send("Raca not found");
    }
    res.render("racaUpdate", { raca: racas.rows[0] });
};

exports.racaUpdatePost = async (req, res) => {
    const { raca } = req.body;
    await db.updateRacas(raca, req.params.id);
    res.redirect("/raca");
};
exports.racaGatoList = async (req, res) => {
    try {
        const gatos = await db.racaGato(req.params.raca);  // Query gatos by breed (raca)
        res.render('gatosList', { gatos });  // Render the gatoList view with the cats data
    } catch (err) {
        res.status(500).send(err.message);
    }
};
//ah shit,only realised it is wrong the name, this delete raca but i dont wanna change.

exports.racaGatoDelete = async(req,res) =>{
    const {raca} = req.body;
    await db.deleteRaca(req.params.raca)
    res.redirect("/")

}