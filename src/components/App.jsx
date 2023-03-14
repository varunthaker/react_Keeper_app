import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [noteList, setNoteList] = useState([])

    function addNote(note) {

        setNoteList((prevList)=> {
            return [...prevList, note]
        })
        
    }

    function deleteNote(id) {

        setNoteList((prevList)=> {
            return prevList.filter((list, index) => {
                return index!==id
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
         />

       { noteList.map((notes, index )=> {
        return (<Note 
        key=   {index} 
        id = {index}
        title= {notes.title}
        content={notes.content}
        onDelete = {deleteNote}/>)
        })}

      <Footer />
    </div>
  );
}

export default App;