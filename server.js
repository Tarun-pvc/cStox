import express from "express";
import cors from "cors";
import compression from "compression";
import { PORT, DB_URL } from "./config.js";
import mongoose from "mongoose";
import stockRouter from "./routes/stock.js"
import userRouter from "./routes/user.js";
import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import { Stock } from "./mongoose.js";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()

app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

try {
    mongoose.connect(DB_URL)
}
catch(e) {
    console.log(e)
}

app.use("/user", userRouter)
app.use("/stock", stockRouter)
app.use(express.static(join(__dirname, "client", "build")))
app.get("/", (req, res) => res.sendFile(resolve(__dirname, "client", "build", "index.html")))

app.listen(PORT, async () => {
    if(!await Stock.findOne({data: "2018-01-15"})) {
        for(var file of readdirSync(join(__dirname, "data"))) {
            const company = file.split(".")[0].toLowerCase()
            const lines = (await readFile(join(__dirname, "data", file), "utf-8")).split("\n")
            const data = lines.splice(0, 1)[0].toLowerCase().split(",")
            data[data.indexOf("adj close")] = "adjClose"
            console.log(lines.length)
            var entries = []
            for(var line of lines) {
                const lineData = line.split(",")
                var stockData = {}
                stockData.company = company
                stockData._id = `${company}-${lineData[data.indexOf("date")]}`
                for(var dataEntry of data) {
                    if(dataEntry !== "date") {
                        stockData[dataEntry] = Number(lineData[data.indexOf(dataEntry)])
                    }
                    else {
                        stockData[dataEntry] = lineData[data.indexOf(dataEntry)]
                    }
                }
                entries.push(stockData)
            }
            await Stock.insertMany(entries)
        }
    }
    console.log("Listening on PORT: ", PORT)
})