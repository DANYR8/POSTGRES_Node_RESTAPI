import {pool} from '../db.js';

export const getInformacion = async(req, res) =>{
    const { rows } = await pool.query("SELECT * FROM informacion");
    res.json(rows);
}

export const getInformacionById = async(req, res) =>{
    const {id} = res.params;
    const {rows} = await pool.query("SELECT * FROM informacion WHERE id = $1",[id]);

    if(rows.length === 0){
        return res.status(404).json({message: 'Informacion no encontrada'});
    }
}

export const createInformacion = async(req, res) =>{
    try{
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO informacion (title, price) VALUES ($1, $2) RETURNING *', [data.title, data.pricre]);
    }catch{
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export const deleteInformacion = async(req, res) =>{
    const { id } = req.params;
    const {rowCount} = await pool.query('DELETE FROM informacion WHERE id = $1 RETURNIN *',[id]);

    if(rowCount === 0){
        return res.status(404).json({message: "informacion not found"})
    }

    return res.sendStatus(204);
}

export const updateInformacion = async(req, res) =>{
    const {id} = res.params;
    const data = req.body;
    const {rows} = await pool.query('UPDATE informacion SET title = $1, price = $2 RETRUNING *', [data.title, data.pricre]);
}