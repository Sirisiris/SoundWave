import React from 'react';
import { Button, Box, TextField, Typography } from "@mui/material";

export default function Main3 () {
    return (
<section className="Main3" id="Main3" style={{backgroundColor: "#302e3a", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "8%", paddingBottom: "10%"}}>
    <Box style={{display: "flex", gap: "20px"}}>
    <Typography variant="h1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", fontWeight: "600", marginRight: "8rem"}}>Join the <span style={{color: "#d3007b"}}>fun.</span></Typography>
    </Box>
    <Box style={{backgroundColor: "#202027", padding: "3rem", borderRadius: "30px", paddingLeft: "3rem"}}>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Name:</Typography>
        <TextField variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}}/>
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Email:</Typography>
        <TextField variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}} />
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Password:</Typography>
        <TextField variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}} />
        </>
        <>
        <br/><Button style={{color: "white", backgroundColor: "#4853ab", width: "20rem", fontFamily: "Poppins", fontWeight: "400", fontSize: "0.8rem", textTransform: "capitalize", marginTop: "1rem", padding: "0.75rem", borderRadius: "10px"}}>Join Now</Button>
        </>
    </Box>
</section>
    )
}