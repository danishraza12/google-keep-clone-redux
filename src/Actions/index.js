export const addNote = (noteObj) => {
    return { 
        type: 'ADD_NOTE',
        payload: noteObj
    }
}

export const setShowNote = (visible) => {
    return {
        type: 'SHOW_NOTE',
        payload: visible
    }
}