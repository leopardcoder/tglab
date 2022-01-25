import {getFiles} from "../getFiles.js";
import store from "../store/store.js";
import express from "express";

export const scanRouter = express.Router()

scanRouter.get('/', (req, res) => {
    getFiles(store.getState())
    res.send(store.getState())
})
