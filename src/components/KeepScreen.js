import React, { useState } from 'react'
import styled from "styled-components";
import Note from './Note'
import MainNote from './MainNote';
import EditNote from './EditNote';

const KeepScreen = props => {
	return(
		<React.Fragment>
			<MainNote 
				title={props.title}
				text={props.text}
				showNote={props.showNote}
				onShowNote={props.onShowNote}
				onTitleSelect={props.onTitleSelect}
				onTitleChange={props.onTitleChange}
				onTextSelect={props.onTextSelect}
				onTextChange={props.onTextChange}
			/>
			{/** Render all the notes below the input area */}
			<RenderNote>
				{ props.notes ? props.notes.map((note,index)=>
          			<Note
						note={note}
            			key={index}
          			/>): ''}
			</RenderNote>
		</React.Fragment>
	)
}

export default KeepScreen;

const RenderNote = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:center;`