import { pool } from '../db.js';

export const getEmployee = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM employee');
    res.json(rows);
}

export const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM employee WHERE id = $1', [id]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
}

export const findEmployeeByEmail = async (req, res) => {
    try {
        const { email, password } = req.body;  
 
        const { rows } = await pool.query(
            'SELECT * FROM employee WHERE email = $1', [email]
        );
 
        if (rows.length === 0) {
            return res.status(401).json({ message: "Correo o contraseña incorrectos" });
        }
 
        const employee = rows[0];
 
        if (employee.password !== password) {
            return res.status(401).json({ message: "Correo o contraseña incorrectos" });
        }
 
       const { password: _, ...employeeSafe } = employee;
       return res.status(200).json({ message: "Login exitoso", employee: employeeSafe });
 
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
 


export const createEmployee = async (req, res) => {
    try {
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO employee (name, email) VALUES ($1, $2) RETURNING *', [data.name, data.email]);
        return res.json(rows[0]);
    } catch (error) {
        console.log(error);

        if (error?.code === "23505") {
            return res.status(409).json({ message: "Email already exist" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteEmployeeById = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM employee WHERE id = $1 RETURNING *', [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "User not found" })
    }

    return res.sendStatus(204);
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const { rows } = await pool.query('UPDATE employee SET name = $1, email = $2  WHERE id = $3 RETURNING *', [data.name, data.email, id]);
    return res.json(rows[0]);

}