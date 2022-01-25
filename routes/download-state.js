import store from "../store/store.js";
import express from "express";

export const stateRouter = express.Router()

stateRouter.get('/', (req, res) => {
    res.send(store.getState())
})
