import React from 'react';
import { Button, Box, TextField, Typography } from "@mui/material";

export default function Main3 () {
    return (
<section className="Main3" style={{backgroundColor: "#302e3a", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "8%", paddingBottom: "13%"}}>
    <Box style={{display: "flex", gap: "20px"}}>
    <Typography variant="h1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Join the fun.</Typography>
    </Box>
    <Box style={{}}>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Name:</Typography>
        <TextField variant="outlined" size="small" style={{width: "20rem", border: "2px solid #ced4da", borderRadius: "10px", marginBottom: "1.5rem"}}/>
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Email:</Typography>
        <TextField variant="outlined" size="small" style={{width: "20rem", border: "2px solid #ced4da", borderRadius: "10px", marginBottom: "1.5rem"}} />
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Password:</Typography>
        <TextField variant="outlined" size="small" style={{width: "20rem", border: "2px solid #ced4da", borderRadius: "10px", marginBottom: "1.5rem"}} />
        </>
        <>
        <br/><Button>Join Now</Button>
        </>
    </Box>
</section>
    )
}