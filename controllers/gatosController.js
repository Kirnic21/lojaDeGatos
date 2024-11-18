
const db = require("../db/queries")

exports.gatoList = async (req, res, next) => {
        const gatos = await db.getAllGatos()
        console.log("Gatos",gatos)
    
         await res.render("gatosList", { gatos }); // Ensure "gatos" is being passed correctly
    };
exports.gatoDetalhes = (req,res,next)=>{
    res.render("gato")
}
exports.gatoCreateGet = (req,res,next) =>{
    res.render("gatosCreate")
}
exports.gatoCreatePost = async (req,res,next)=>{
    console.log(req.body)
    const {gato,raca,peso} = req.body
    
    await db.insertGato(gato,raca,peso)
    res.redirect("/gato")
}

exports.gatoUpdateGet = async (req,res,next)=>{
    const gato = await db.getGato(req.params.id)
    console.log(gato.rows[0])
    if (!gato) {
        return res.status(404).send("Gato not found");
    }
    res.render("gatoUpdate", { gato:gato.rows[0] });
}

exports.gatoUpdatePost = async (req, res, next) => {

    try {
        const { gato, raca, peso } = req.body;
        // Update the gato with the provided id
        {}
        await db.updateGato(gato, raca, peso, req.params.id); 
    

        // Fetch the updated gato data after the update
        const updatedGato = await db.getGato(req.params.id);
        console.log(updatedGato.rows[0]); // Log the updated cat details
        
        res.redirect("/gato");
    } catch (error) {
        console.error("Error updating gato:", error);
        next(error); // Pass error to the next middleware
    }
};
exports.gatoDelete = async (req,res,next)=>{
    const {gato } = req.body;
    await db.deleteGato(req.params.nome)
    res.redirect("/")
}