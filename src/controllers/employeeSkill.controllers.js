import { pool } from '../db.js';

export const getSkill = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM skill');
    res.json(rows);
}

export const getSkillById = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM skill WHERE id = $1', [id]);
    if (rows.length === 0) {
        return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(rows[0]);
}

export const getBySkill = async (req, res) => {
    try {
        const { skill } = req.params;

        const { rows } = await pool.query(
            `SELECT employee.id, employee.name, skill.skill
             FROM employee
             INNER JOIN skill ON employee.skill_id = skill.id
             WHERE LOWER(skill.skill) = LOWER($1)`,
            [skill]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'No se encontraron contratistas con ese oficio' });
        }

        return res.json(rows);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createSkill = async (req, res) => {
    try {
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO skill (skill) VALUES ($1) RETURNING *', [data.skill]);
    } catch {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteSkill = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM skill WHERE id = $1 RETURNING * ', [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "Skill not found" });
    }

    return res.sendStatus(204);
}

export const updateSkill = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const { rows } = await pool.query("UPDATE skill SET skill = $1 RETURNING *", [data.skill]);
}