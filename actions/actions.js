import store from "../store/store.js";

export function addFiles(files) {
    store.dispatch({
        type: 'addFiles',
        payload: {
            files
        }
    })
}
export function updateFiles(newStateArray) {
    store.dispatch({
        type: 'updateFiles',
        payload: {
            newStateArray
        }
    })
}
