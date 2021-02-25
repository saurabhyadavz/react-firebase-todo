import React from 'react';
import './Todo.css';
import {Avatar, List,ListItem, ListItemAvatar, ListItemText}  from '@material-ui/core';;


function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
            <ListItemAvatar>
                
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Dummy deadline"></ListItemText>

            </ListItem>
        </List>
    )
}

export default Todo
