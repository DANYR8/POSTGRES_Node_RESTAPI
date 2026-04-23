import 'dotenv/config'; 
import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js';
import customerRoutes from './routes/customer.routes.js';
import taskRoutes from "./routes/task.routes.js";
import morgan from 'morgan';
import { pool } from './db.js'; 
pool.connect()
  .then(() => console.log('✅ Conectado a Supabase'))
  .catch(err => console.log('❌ Error de conexión:', err.message));

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);
app.use(customerRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log("Server on port", PORT);