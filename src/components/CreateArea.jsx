import React, {useState} from "react";

function CreateArea(props) {

    const [note, setNote] =useState({
        title: '',
        content: ''
    })

    function handleChange(e) {

        const {name, value} = e.target

        setNote((prevValue)=> {
           return {...prevValue,
            [name]:value
        }

        })
        

    }

    function submitNote(e) {
        props.onAdd(note)
        e.preventDefault()
        setNote({
            title: '',
            content: ''
        })
    }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value = {note.title} onChange = {handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value = {note.content} onChange = {handleChange}/>
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;