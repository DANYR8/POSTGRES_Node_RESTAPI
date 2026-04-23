import { pool } from "../db.js";

export const getCustomer = async (req, res) => {
    const { rows } = await pool.query ('SELECT * FROM customer');
    res.json(rows);
}

export const getCustomerById = async (req, res) =>{
    const { id } =  req.params;
    const { rows } = await pool.query('SELECT * FROM customer WHERE id = $1', [id]);

    if (rows.length === 0){
        return res.status(404).json({message: "User not found"});
    }

    res.json(rows[0]);
}

export const createCustomer = async(req, res) =>{
    try{
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO customer (name, lastname, birthday, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [data.name, data.lastname, data.birthday, data.email, data.password]);
    }catch{
        console.log(error);
        if(error?.code === "23505"){
            return res.status(409).json({message: "Email already exist"});
        }
        return res.status(500).json({message: "Internal server error"});
    }
}

export const deleteCustomerById = async(req, res) => {
    const {id} = req.params;
    const { rowCount} = await pool.query('DELESTE FROM customer WHERE id = $1 RETURNING *', [id]);
    
    if(rowCount === 0){
        return res.status(404).json({message: "User not found"})
    }

    return res.sendStatus(204);
}

export const updateCustomer = async(req, res) =>{
    const {id} = req.params;
    const data = req.body;
    const {rows} = await pool.query('UPADATE customer SET name = $1, lastName = $2, birthday = $3, email = $4, password = $5 RETURNING *', [data.name, data.lastName, data.birtday, data.email, data.password]);

}