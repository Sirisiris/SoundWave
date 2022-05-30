import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button, Box } from "@mui/material";
import logo from '../images/logo.png';

export default function Navbar () {
    return (
        <AppBar position='fixed' style={{backgroundColor: "transparent", background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(47,48,58,0.742734593837535) 37%, rgba(47,48,58,1) 86%)", boxShadow: "0px 0px 0px 0px", paddingTop: "2%"}}>
            <Toolbar>
                <img src={logo} alt="Logo" style={{marginLeft: "10%"}} />
                <Typography variant='h6' component='div' sx={{flexGrow: 1}} style={{paddingLeft: "1%", fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "300"}}>SoundWave</Typography>
                <Stack direction='row' spacing={2}></Stack>
                <Box style={{marginRight: "20%"}}>
                    <Button href="#Main2" style={{color: "white", fontFamily: "Poppins", fontWeight: "300", fontSize: "1.2rem", textTransform: "capitalize", marginRight: "2rem"}}>Discover</Button>
                    <Button href="#Main3" style={{color: "white", fontFamily: "Poppins", fontWeight: "300", fontSize: "1.2rem", textTransform: "capitalize"}}>Join</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
