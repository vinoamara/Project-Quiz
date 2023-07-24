import React,{useState} from 'react'
import {Drawer,List,  IconButton, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Drawerc = ({links}) => {
    const [open,setOpen] = useState(false);
  return (
    <>
    <Drawer PaperProps={{ 
        sx:{backgroundColor:'rgba(83,145,158,1)'}
        }} open={open} onClose={()=> setOpen(false)} >
    <List>
        { links.map((link,index)=>(
        <ListItemButton>
            <ListItemIcon onClick={()=> setOpen(false)} key={index} divider>
                <ListItemText sx={{color:"white"}}>{link}  </ListItemText>
            </ListItemIcon>
        </ListItemButton>
))}
    </List>
    </Drawer>
    <IconButton sx={{marginLeft:"auto", color:"white"}} onClick={()=>setOpen(!open)}>
        <MenuIcon />
    </IconButton>
    </>
  )
}

export default Drawerc