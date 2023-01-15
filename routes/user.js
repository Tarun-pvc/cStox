import { Router } from "express";
import { User, Session } from "../mongoose.js";
import Tokenizer from "../tokenizer.js";
import SHA256 from "crypto-js/sha256.js";
import Base64 from "crypto-js/enc-base64.js";

const router = Router()

router.post("/signIn", async (req, res) => {
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
    var currentSession = await Session.findOne({email: body.email, password: body.password})
    if(currentSession) {
        res.status(200).send({
            status: 200,
            session: currentSession
        })
        return
    }
    var encryption = Tokenizer.encrypt(body.password)
    var date = Date.now()+86400000
    var token = Base64.stringify(SHA256(body.email+encryption+String()));
    currentSession = await new Session({
        _id: body.email,
        token: token,
        expire: date
    }).save()
    res.redirect("/login")
})

router.post("/create", async (req, res) => {
    const body = req.body
    var keys = Object.keys(body)
    var values = Object.values(body)
    var required = ["username", "email", "password"]
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
    if(await User.findById(body.username) || await User.findOne({email: body.email})) {
        res.status(404).send({
            status: 404,
            error: "The username/email already exists in the database"
        })
        return
    }
    body._id = body.username
    var encryption = Tokenizer.encrypt(body.password)
    body.password = encryption
    var dev = await new User(body).save()
    if(dev) {
        res.redirect("/login")
    }
    else {
        res.redirect("/register")
    }
})

export default router