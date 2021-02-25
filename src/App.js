import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
   const [todos, setTodos] = useState([]);
   const [input,setInput] = useState('');
   
  //  when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    // this code here..fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
    
  }, [])


   const addTodo = (event) =>{
     //this will fireoff when we click the button
     event.preventDefault(); //will stop refresh
     db.collection('todos').add({
       todo:input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
    
     setInput(''); //clear up the input after clicking add todo button
   }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
       
      </FormControl>
      <Button disabled={!input} type ="onsubmit"onClick={addTodo} variant="contained" color="primary"  >
          Add todo
        </Button>
      </form>
     
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
