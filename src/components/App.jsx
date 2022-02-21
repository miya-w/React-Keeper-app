import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
// import  Note from "./Note";
import notes from "../notes";
import Note from "./Note";

function createNote(e){
return(
  <Note
    key = {e.id}
     title ={e.title}
    content = {e.content} 
  />
);
 
}

function App() {
  return (
    <div>
      <Heading />
      <div>
        {notes.map(createNote)}
      </div>
      <Footer />
    </div>
  );
}

export default App;