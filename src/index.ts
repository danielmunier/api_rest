import express from "express"
import axios from "axios"
const compression = require("compression")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express();
import userRoutes from "./routes"

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(userRoutes)


app.listen(8080, ()=> {
    console.log("Running on http://localhost:8080")
})