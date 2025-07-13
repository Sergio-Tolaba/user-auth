import express from "express";
import authRouter from './src/routes/auth.routes.js';




const app = express()
const PORT = process.env.PORT
app.use(bodyParser.json());
// Routers
app.use('/auth', authRouter);

app.listen(PORT, (req, res)=>console.log(`Server running on PORT:${PORT} http://localhost:3000 `))
