const pool = require("./pool");

async function getAllGatos() {
  const { rows } = await pool.query("SELECT * FROM gatos");
  return rows;
}
async function updateGato(gato, raca, peso, id) {
        await pool.query(
            "UPDATE gatos SET gato = $1, raca = $2, peso = $3 WHERE id = $4", 
            [gato, raca, peso, id]
        );
    }
async function getGato(id){
    const  gatos  = await pool.query("SELECT * FROM gatos WHERE id = $1",[id] )
    return gatos
}
async function insertGato(gato, raca, peso) {
    await pool.query(
      "INSERT INTO gatos (gato, raca, peso) VALUES ($1, $2, $3)", 
      [gato, raca, peso]
    );
  }
  
async function getAllRacas()
{
    const {rows } = await pool.query("SELECT * FROM raca")
    return rows;
}
async function updateRacas(raca,id){
    await pool.query(
        "UPDATE raca SET raca = $1 WHERE id = $2 ",[raca,id]
    )
}
async function getRaca(id){
    const racas = await pool.query("SELECT * FROM raca WHERE id = $1",[id])
    return racas
}
async function insertRaca(raca){
    await pool.query(
        "INSERT INTO raca(raca) VALUES ($1)",
        [raca]
    )
}
async function racaGato(raca) {
    const result = await pool.query(
        `SELECT * FROM gatos 
         JOIN raca ON gatos.raca = raca.raca
         WHERE raca.raca = $1;`, [raca] 
    );
    return result.rows;
}
async function deleteRaca(raca){
    await pool.query("DELETE FROM raca WHERE raca = $1;",[raca])
    
}
async function deleteGato(gato){
    await pool.query("DELETE FROM gatos WHERE gato = $1;",[gato])
}
module.exports = {
  getAllGatos,
  insertGato,
  updateGato,
  getGato,
  getAllRacas,
  updateRacas,
  getRaca,
  insertRaca,
  racaGato,
  deleteRaca,
  deleteGato
};
