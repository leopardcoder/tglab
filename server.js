import express from 'express'
import {getFiles} from './getFiles.js'
import store from "./store/store.js";
import dotenv from "dotenv"

dotenv.config();

const app = express()

getFiles(store.getState())

app.get('/list/', (req, res) => {
    res.json(store.getState())
})

app.get('/scan/', (req, res) => {
    getFiles(store.getState())
    res.send(store.getState())
})

app.get('/download-state/', (req, res) => {
    res.send(store.getState())
})

app.listen(process.env.PORT)
