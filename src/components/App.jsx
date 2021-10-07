import React, { useState,useEffect } from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import EditArea from "./EditArea";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([]);

  async function fetchData(){
    const req= await axios.get('http://localhost:5000/')
       //console.log(response.data);
       setNotes(req.data);
    }

   useEffect(() => {
     fetchData();
    },);

  function addNote(notedb) {
    axios.post('http://localhost:5000/add',notedb)
    .then(function (response) {
      console.log(response);
      fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });

   
  }
  function deleteNote(id) {
      axios.delete("http://localhost:5000/"+id)
      .then((response)=>{

        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return noteItem._id !== id;
          });
        });

        console.log(response);
      })
 }


  return (
    <Router>
         <div>
      <Header />
      <Switch>
      <Route exact path="/">  
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
           return (
           <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            body={noteItem.body}
            onDelete={deleteNote}
           />
          );
         })}
      </Route>
      <Route path ="/note/:id"><EditArea/></Route>
      </Switch>
      
      <Footer />
    </div>


    </Router>
   
  );
}

export default App;
