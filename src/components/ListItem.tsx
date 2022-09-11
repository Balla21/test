import {useContext} from "react";
import { DataContext } from "../context/DataContext";

//material ui library
import List from '@mui/material/List';

//shared types
import { User } from "../shared/types";

// component
import Item from "./Item";



export default function ListItem(){
    const {userList} = useContext(DataContext);

    return (
        <List sx={{ mx:"auto" ,width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            { userList.map( (user:User) => (<Item key={user.id} {...user} />)  ) }
        </List>
    );
    
}