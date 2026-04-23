import { pool } from "../db.js";

export const getTask = async(req, res) =>{
    const { rows } = await pool.query('SELECT * FROM task');
    res.json(rows);
}

export const getTaskById = async(req, res) =>{
    const {id} = req.params;
    const { rows } = await pool.query('SELECT * FROM task WHERE id = $1',[id]);
    if(rows.length === 0){
        return res.status(404).json({message: "User not found"});
    }

    res.json(rows[0]);
}

export const createTask = async(req, res) =>{
    try{
        const data = req.body;
        const { rowns } = await pool.query('INSERT INTO task (job_Info, id_Employee, id_Customer) VALUES ($1, $2, $3) RETURNING * ', [data.job_Info, data.id_Employee, data.id_Cutomer]);
    }catch{
        console.log(error);
        if(error?.code === "23505"){
            return res.status(409).json({message:"Some id is wrong"});
        }
    }
}

export const deleteTaskById = async(req, res) => {
    const { id } = req.params;
    const {rowCount} = await pool.query('DELETE FROM task WHERE id = $1 RETURNIN *',[id]);

    if(rowCount === 0){
        return res.status(404).json({message: "task not found"})
    }

    return res.sendStatus(204);
}

export const updateTask = async(req, res) =>{
    const {id} = req.params;
    const data = req.body;
    const {rows} = await pool.query('UPDATE task SET job_Info = $1, id_Employee = $2, id_Customer = $3 RETRUNING *', [data.job_Info, data.id_Employee, data.id_Cutomer]);
}