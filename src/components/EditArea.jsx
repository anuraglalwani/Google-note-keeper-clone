import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory,useParams } from "react-router";
import axios from "axios";

function EditArea() {
  const history = useHistory("");
  const [title,setTitle]=useState("");
  const[body,setBody]=useState("");
  const [expand,setExpand]=useState(false);
  const {id}=useParams();

  function updateNote(event) {
    const notedb={
      title: title,
      body: body
    }
    axios.put('http://localhost:5000/update/'+id,notedb).then((res)=>{console.log(res)})
    history.go(-1);
    event.preventDefault();
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
          name="content"
          onChange={(e)=>setBody(e.target.value)}
          value={body}
          placeholder="Edit note here..."
          rows={expand?"3":"1"}
        />
        <Zoom in={expand?true:false}>
        <Fab onClick={updateNote}>
          <UpdateIcon/>
          </Fab>
         </Zoom>
      </form>
    </div>
   
  );
}

export default EditArea;
