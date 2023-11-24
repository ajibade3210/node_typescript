import React, { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const res = await fetch("http://localhost:8500/api/notes", {
          method: "GET",
        });
        const notes = await res.json();
        setNotes(notes);
      } catch (err) {
        console.log("err: ", err);
        alert(err);
      }
    }
    loadNotes();
  }, []);

  return (
    <div className="App">
      {notes.map(note => (
          <Note note={note} key={note._id} />
      ))}
    </div>
  );
}

export default App;
