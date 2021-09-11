import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";

import Header from "./components/Header";
import KeepScreen from "./components/KeepScreen";
import { addNote, setShowNote } from './Actions';

const App = props => {
	const [textSelected, setTextSelected] = useState(false);
	const [titleSelected, setTitleSelected] = useState(false);
	const [text, setText] = useState('');
	const [title, setTitle] = useState('');

	//If the note does not contain any text so it will be closed until clicked
	const closeNote = () => {
		if (!textSelected && !titleSelected) {
			if (text !== '' || title !== '') {
				props.setShowNote(false)
				let noteObj = {
					title: title,
					text: text
				}
				setText('');
				setTitle('');
				props.addNote(noteObj);
			}
		}
	};
	return (
		<div
			className="App"
			onClick={() => { closeNote(); }}
		>
			<Header />
			<KeepScreen
				text={text}
				title={title}
				showNote={props.showNote}
				onTextSelect={textSel => setTextSelected(textSel)}
				onTitleSelect={titleSel => setTitleSelected(titleSel)}
				onShowNote={noteShow => props.setShowNote(noteShow)}
				onTextChange={changeText => setText(changeText)}
				onTitleChange={changeTitle => setTitle(changeTitle)}
				notes={props.notes}
			/>
		</div>
	);
}

//Get notes from reducer
const mapStateToProps = state => {
	return { notes: state.notesReducer, showNote: state.showNoteReducer }
}

export default connect(mapStateToProps, { addNote, setShowNote })(App);
