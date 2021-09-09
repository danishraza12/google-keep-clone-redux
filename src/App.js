import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import KeepScreen from "./components/KeepScreen";

function App() {
	const [showNote, setShowNote] = useState(false);
	const [textSelected, setTextSelected] = useState(false);
	const [titleSelected, setTitleSelected] = useState(false);
	const [text, setText] = useState('');
	const [title, setTitle] = useState('');
	const [notes, setNotes] = useState([]);

	//If the note does not contain any text so it will be hidden out and removed
	const hideNote = () => {
		if (!textSelected && !titleSelected) {
			if (text !== '' || title !== '') {
				setShowNote(false)
				let noteObj = {
					title: title,
					text: text
				}
				setText('');
				setTitle('');
				setNotes([...notes, noteObj])
			}
		}
	};

	return (
		<div
			className="App"
			onClick={() => {
				hideNote();
			}}
		>
			<Header />
			<KeepScreen
				text={text}
				title={title}
				showNote={showNote}
				onTextSelect={(state) => setTextSelected(state)}
				onTitleSelect={(state) => setTitleSelected(state)}
				onShowNote={(state) => setShowNote(state)}
				onTextChange={(state) => setText(state)}
				onTitleChange={state => setTitle(state)}
				notes={notes}
			/>
		</div>
	);
}

export default App;