const INITIAL_STATE = false

const showNoteReducer = (showNotes = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SHOW_NOTE':
            showNotes = action.payload
            return showNotes
        default:
            return showNotes
    }
}

export default showNoteReducer;