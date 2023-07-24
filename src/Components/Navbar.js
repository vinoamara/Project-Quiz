import React ,{useState} from 'react';
import Logo from '../assets/logo.jpg';
import {Grid,Toolbar,AppBar,Typography,Box,Tabs,Tab,useTheme,useMediaQuery} from "@mui/material";
import Drawerc from './Drawerc';
const Navbar = ({links}) => {
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    
      
    const [value,setvalue] = useState();
  return (
    
    <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(83,145,158,1) 100%);"}}>
        <Toolbar>
            { isMatch? <>

                <Typography>
                <Box
            component="img"
            sx={{
            height: 50,
            }}
            alt="Your logo."
            src={Logo}
        />
            </Typography>
            
            
                <Drawerc links={links}/>   
               
            </> :
          <Grid sx={{placeItems:"center"}}container>
                <Grid item>
                <Typography>
                <Box
            component="img"
            sx={{
            height: 50,
            }}
            alt="Your logo."
            src={Logo}
        />
            </Typography>
                </Grid>

                <Grid  item  xs ={5} sx={{marginLeft:"auto"}} >
                    
                    <Tabs   indicatorColor='secondary'textColor='inherit'value={value} onChange={(e,val)=>setvalue(val)}>
                        {links.map((link,index)=>(<Tab key ={index} label={link}/>))}
                      

                        </Tabs>
                    
                </Grid>
            </Grid>
}
         

        
        </Toolbar>
    </AppBar>

  )
}

export default Navbar