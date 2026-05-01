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

export const findCustomerByEmail = async (req, res) => {
    try {
        const { email, password } = req.body;  // ← req.body, no req.params
 
        const { rows } = await pool.query(
            'SELECT * FROM customer WHERE email = $1', [email]
        );
 
        if (rows.length === 0) {
            return res.status(401).json({ message: "Correo o contraseña incorrectos" });
        }
 
        const customer = rows[0];
 
        if (customer.password !== password) {
            return res.status(401).json({ message: "Correo o contraseña incorrectos" });
        }
 
        const { password: _, ...customerSafe } = customer;
        return res.status(200).json({ message: "Login exitoso", customer: customerSafe });
 
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
 

export const createCustomer = async(req, res) =>{
    try {
        const data = req.body;
        const name     = data.name;
        const lastname = data.lastName || data.lastname;
        const birthday = data.birthDay  || data.birthday;
        const email    = data.email;
        const password = data.password;
 
        const { rows } = await pool.query(
            'INSERT INTO customer (name, lastname, birthday, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, lastname, birthday, email, password]
        );
 
        return res.status(201).json(rows[0]); 
    } catch (error) {                         
        console.log(error);
        if (error?.code === "23505") {
            return res.status(409).json({ message: "Email already exists" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteCustomerById = async(req, res) => {
    const {id} = req.params;
    const { rowCount} = await pool.query('DELETE FROM customer WHERE id = $1 RETURNING *', [id]);
    
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

