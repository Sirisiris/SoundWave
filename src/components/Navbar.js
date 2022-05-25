import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button} from "@mui/material";
import logo from '../images/logo.png';
import './Navbar.css';

export default function Navbar () {
    return (
        <AppBar position='static' style={{backgroundColor: "transparent", boxShadow: "0px 0px 0px 0px", paddingTop: "2%" }}>
            <Toolbar>
            <img src={logo} alt="Logo" style={{paddingLeft: "10%"}} />
            <Typography variant='h6' component='div' sx={{flexGrow: 1}} style={{paddingLeft: "1%", fontSize: "1.5rem"}}>
                SoundWave
            </Typography>
            <Stack direction='row' spacing={2}></Stack>
            <Button style={{color: "white", paddingLeft: "1%", paddingRigth: "1%", fontSize: "1.1rem"}}>Discover</Button>
            <Button style={{color: "white", paddingRigth: "20%", fontSize: "1.1rem"}}>Join</Button>
            </Toolbar>
        </AppBar>
    )
}

/*
import React from 'react';
import logo from '../images/logo.png';
import './Navbar.css';

export default function Navbar () {
    return (
    <nav>
        <ul className='nav-list'>
            <li className='nav-item a1'><a href='#'><img src={logo} alt="Logo" /> <h1 className='logo'>Soundwave</h1></a></li>
            <li className='nav-item a2'><a href='#'>Discover</a></li>
            <li className='nav-item a3'><a href='#'>Join</a></li>
        </ul>
    </nav>
    )
}
*/