import express from "express";
import store from "../store/store.js";

export const listRouter = express.Router()

listRouter.get('/', (req, res) => {
    res.json(store.getState())
})
