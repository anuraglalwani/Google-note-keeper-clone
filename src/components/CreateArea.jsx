import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import axios from "axios";
function CreateArea(props) {

  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");
  const [expand,setExpand]=useState(false);

 

  function submitNote(event) {
    event.preventDefault();
    const notedb={
      title: title,
      body: body
    }
  
  
    props.onAdd(notedb);
    
     setTitle("");
     setBody("");

    
  }
  function Expanding(){
    setExpand(true);
  }
  

  return (
    <div>
      <form className="create-note">
      {expand && 
         <input 
          name="title"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          placeholder="Title"
        />}
        <textarea
          onClick={Expanding}
          name="body"
          onChange={(e)=>setBody(e.target.value)}
          value={body}
          placeholder="Take a note..."
          rows={expand?"3":"1"}
        />
        <Zoom in={expand?true:false}>
        <Fab onClick={submitNote}>
          <AddIcon/>
          </Fab>
         </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
