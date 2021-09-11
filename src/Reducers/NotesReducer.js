const INITIAL_STATE = []
let id = 0;
let noteInfo = {}

const notesReducer = (notes = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            id = id + 1;
            noteInfo = { ...action.payload, id }
            return [ ...notes, noteInfo ]
        default:
            return notes
    }
}

export default notesReducer;