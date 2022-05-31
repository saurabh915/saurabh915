//this file is useful to transfer our notes as props  

import NoteContext from "./noteContext";
//here we imported notecontext which is useful to storing the notes which will be useful to use as prop in any component
import { useState } from "react";

const NoteState = (props) => {
  // const s1 = {
  //     "name":"saurabh",
  //     "class":"sb"
  // }
  const host = "http://localhost:5000"

  const notesinitial = [
    
  ]
  //here state will be passed to each component

  //  const [state,setState] = useState(s1);
  const [notes, setNotes] = useState(notesinitial);








//fetch all Notes

const getNotes = async () => {
  // TODO: API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3ZjVmZGI3MWMxNjcwNWJjOTUxNDMzIn0sImlhdCI6MTY1Mjg3ODAxM30.GfDO6ZfvX2cf-s2DUirNGQZkEjOOcKdtRwDQKQm-rjM"
    }
  });
  const json = await response.json();

  console.log(json);
setNotes(json);


//this will give all notes
 

}











  //Add a Note

  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3ZjVmZGI3MWMxNjcwNWJjOTUxNDMzIn0sImlhdCI6MTY1Mjg3ODAxM30.GfDO6ZfvX2cf-s2DUirNGQZkEjOOcKdtRwDQKQm-rjM"
      },
      //for converting json into string
      body: JSON.stringify(

        { title, description, tag}

        )
    });
    // const json = response.json();





//adding notes to frontend
    console.log("adding a new note");
    const note = {
      "_id": "6285e878ee41aea1d8dfd56bfbd9",
      "user": "627f5fdb7f1c16705dfdbc951433",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "1652942968254",
      "__v": 0
    };
    setNotes(notes.concat(note))

  }

  //Delete a Note

  const deleteNote = async (id) => {

    //for api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3ZjVmZGI3MWMxNjcwNWJjOTUxNDMzIn0sImlhdCI6MTY1Mjg3ODAxM30.GfDO6ZfvX2cf-s2DUirNGQZkEjOOcKdtRwDQKQm-rjM"
      },
    
    });
    const json = response.json();

console.log(json);



    console.log("deleting the note with id" + id);
    //the below command will return all the notes exept the notes which have _id == id of note which we have to  delete
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }



  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //For API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3ZjVmZGI3MWMxNjcwNWJjOTUxNDMzIn0sImlhdCI6MTY1Mjg3ODAxM30.GfDO6ZfvX2cf-s2DUirNGQZkEjOOcKdtRwDQKQm-rjM"
      },
      body: JSON.stringify(title, description, tag)
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }







  //here update function will be passed to each component

  // const update = ()=>{
  //     setTimeout(() => {
  //         setState({
  //             "name":"larry",
  //             "class":"10b"
  //         })
  //     }, 1000);
  // }/* this props.children will help us to pass the state and update function in all components */
  return (
    // <NoteContext.Provider value={{state:state,update:update}}>



    //here is how we transferd our props in NoteContext
    <NoteContext.Provider value={{ notes, addNote, deleteNote,getNotes }}>


      {props.children}


    </NoteContext.Provider>
  )
}

export default NoteState;