import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/userRoutes";


dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors({
    origin : "http://localhost:3000",
    credentials: true
}))

app.use(express.json())

app.use("/", router)

app.listen(PORT , ()=>{
    console.log(`server listening at ${PORT}`);
    
})

