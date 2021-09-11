import { combineReducers } from "redux";
import notesReducer from './NotesReducer';
import showNoteReducer from "./ShowNoteReducer";

const allReducers = combineReducers({
    notesReducer,
    showNoteReducer
});

export default allReducers;