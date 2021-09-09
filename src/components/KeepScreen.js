import React, { useRef } from 'react'
import styled from "styled-components";
import Note from './Note'

const KeepScreen = (props) =>{
	const NoteTextPortionRef = useRef(null);

	// This function is in place to allow the note to keep 
	// on growing as the user keeps on adding text
	 const increaseSize = (portion) =>{
		portion.current.style.height = "6px";
    	portion.current.style.height = 
			(12 + portion.current.scrollHeight)+"px";
	 }

	return(
		<keepscreen>
			{/**This is the entire note in which the user will enter their data */}
			<NoteBoundary action="">
				{/**NoteTitle allows the user to enter the title */}
				{props.showNote ? <NoteTitle type="text" 
        		name="" id="" placeholder="Title" 
				value={props.title}
				onFocus={()=>props.onTitleSelect(true)}
				onBlur={()=>props.onTitleSelect(false)}
				onChange={(e)=>props.onTitleChange(e.target.value)}
				/> : ''
				}
				{/** NoteBody is the nody portion of the note */}
				<NoteBody name="" 
          			id="" cols="29" rows="1" 
          			placeholder="Enter text..." 
          			value={props.text} 
          			onFocus={()=> {
		 			props.onShowNote(true);
		 			props.onTextSelect(true)
					NoteTextPortionRef.current.focus();}} 
          			onInput={()=>increaseSize(NoteTextPortionRef)} 
          			ref={NoteTextPortionRef} 	
          			onBlur={()=>props.onTextSelect(false)}
					onChange={(e)=>props.onTextChange(e.target.value)}
					/>
			</NoteBoundary>
			{/** Render all the notes below the input area */}
			<RenderNote>
				{props.notes.map((note,index)=>
          			<Note note={note} 
            			key={index}
          			/>)}
			</RenderNote>
		</keepscreen>
	)
}

export default KeepScreen;


/** Following is the definition of all the styled components that I have utilized above */
const NoteBoundary = styled.form`
box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
width:600px;
border-radius:8px;
margin:20px auto;
padding:20px;
`
const NoteTitle = styled.input`
border:none;
color:#000;
display:block;
width:100%;
font-size:18px;
margin:10px 0;
outline:none;
&::placeholder{
	color:#3c4043;
	opacity:1;
}
`
const NoteBody = styled.textarea`
border:none;
color:#000;
display:block;
width:100%;
font-family: 'Noto Sans', sans-serif;
font-size:13px;
font-weight:bold;
outline:none;
resize: none;
overflow: hidden;
min-height: 10px;
&::placeholder{
	color:#3c4043;
	opacity:1;
}
`  
const RenderNote = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:center;
`