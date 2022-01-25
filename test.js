import _ from 'lodash'
import store from "./store/store.js";
import {fileURLToPath} from 'url';
import {dirname} from 'path'
import fs from "fs";


let state = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
let currentFiles = ['one', 'two', 'three', 'four', 'five', 'seven']

const newFilesAdded = _.difference(currentFiles, state)
const removedFiles = _.difference(state, currentFiles)

function update() {

}

const __dirname = dirname(fileURLToPath(import.meta.url));

function getFiles() {
    const files =  fs.readdirSync(__dirname)
    console.log(files)
}

// getFiles()

console.log(JSON.stringify([{name: 'bla', status: true}, {name: 'xa', status: true}]))

// console.log(sameFiles, differentFiles)

