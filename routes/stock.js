import { Stock } from "../mongoose.js";
import { Router } from "express";

const router = Router()

router.get("/get", async (req, res) => {
    const body = Object.keys(req.body).length?req.body:req.query
    res.status(200).send(await Stock.find(body))
})

router.post("/add", async (req, res) => {
    const body = req.body
    var keys = Object.keys(body)
    var values = Object.values(body)
    var required = ["email", "password"]
    for(var i of required) {
        if(!keys.includes(i) || values[keys.indexOf(i)].trim().length === 0) {
            res.status(404)
            res.send({
                status: 404,
                error: `The ${i} parameter is missing or empty in the request body.`,
                comment: "The required parameters are needed for making a request."
            })
            return
        }
    }
    body._id = body.company+"-"+body.date
    res.send(await new Stock(body).save()).status(200)
})

export default router;