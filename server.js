import express from 'express'
import {getFiles} from './getFiles.js'
import store from "./store/store.js";
import dotenv from "dotenv"
import {listRouter} from "./routes/list.js"
import {scanRouter} from "./routes/scan.js"
import {stateRouter} from "./routes/download-state.js"

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express()

getFiles(store.getState())

app.use('/list/', listRouter)
app.use('/scan/', scanRouter)
app.use('/download-state/', stateRouter)

app.listen(PORT, console.log(`Server running on port ${PORT}`))
