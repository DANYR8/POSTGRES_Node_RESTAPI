import 'dotenv/config';
import express from 'express';
import cors from 'cors';          // ← importar cors normal, no de supabase
import morgan from 'morgan';
import { PORT } from './config.js';
import { pool } from './db.js';
import userRoutes from './routes/users.routes.js';
import customerRoutes from './routes/customer.routes.js';
import taskRoutes from './routes/task.routes.js';
import skillRoutes from './routes/employeeSkill.routes.js';
import informacionRoutes from './routes/informacion.routes.js';


const app = express();  


app.use(cors({ origin: "*" }));
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use(userRoutes);
app.use(customerRoutes);
app.use(taskRoutes);
app.use(skillRoutes);
app.use(informacionRoutes);


// Conexión DB
pool.connect()
  .then(() => console.log('Conectado a Supabase'))
  .catch(err => console.log('Error de conexión:', err.message));

app.listen(PORT, () => console.log("Server on port", PORT));