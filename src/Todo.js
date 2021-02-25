import React from 'react';
import './Todo.css';
import {Button, List,ListItem, ListItemAvatar, ListItemText}  from '@material-ui/core';


import db from './firebase';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
            <ListItemAvatar>
                
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Dummy deadline"></ListItemText>

            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
        </List>
    )
}

export default Todo;
