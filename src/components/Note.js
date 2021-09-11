import React from 'react'
import styled from "styled-components";

const Note = props => {
	return (
		<NoteBody>
			<NoteTitle>{props.note.title}</NoteTitle>
			<p>{props.note.text}</p>
		</NoteBody>
	)
}

export default Note;

/** This is the styling that has been used to make the components */
/** Background is set to white currently */
const NoteBody = styled.div`
padding:22px;
background: #FFFFFF;
border:1px solid #e0e0e0;
border-radius:9px;
text-align:left;
font-size:17px;
margin:12px;
min-width:295px;
font-family: system-ui`

const NoteTitle = styled.h3`
font-size:19px;
font-weight:bold;
font-family: system-ui`