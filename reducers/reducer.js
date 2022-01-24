export default function reducer(state = [], action) {
    if (action.type === 'addFiles')
        return action.payload.files
    else if (action.type === 'updateFiles')
        return action.payload.newStateArray
    return state;
}
