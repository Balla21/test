//material ui
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';

//types
import { User } from '../shared/types';
import { ListItemIcon } from '@mui/material';

function Item(props:User){
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={`${props.firstname} ${props.lastname}`} src={`${props.avatar}`} />
                </ListItemAvatar>
                <ListItemText  primary={`${props.firstname} ${props.lastname}`} secondary={props.email} />
                <input type="hidden" value={props.id} />
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}

export default Item;