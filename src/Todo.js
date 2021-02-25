import React from 'react';
import './Todo.css';
import {Button, List,ListItem, ListItemAvatar, ListItemText}  from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import db from './firebase';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
            <ListItemAvatar>
                
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Dummy deadline"></ListItemText>

            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
            
        </List>
    )
}

export default Todo;
