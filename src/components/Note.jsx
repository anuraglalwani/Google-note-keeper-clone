import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }
  

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <button onClick={handleClick}><DeleteIcon/></button>
      <Link to={"/note/"+props.id}> <EditIcon/> </Link>
    </div>
  );
}

export default Note;
