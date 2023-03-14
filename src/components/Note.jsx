import React from 'react'


function Note(props) {

    function onDelete() {
        props.onDelete(props.id)

    }
    return (
    <div className = 'note'>
    <h1 >{props.title}</h1>
    <p />{props.content}
    <button onClick = {onDelete}>Delete</button>
    </div>
    )
}

export default Note