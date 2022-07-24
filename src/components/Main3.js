import React from 'react';
import { Button, Box, TextField, Typography, Grid, Container } from "@mui/material";
import background2 from "../images/background2.png";


export default function Main3 () {
    return (
<Grid container className="Main3" id="Main3"style={{backgroundImage: `url(${background2})`, display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "8%", paddingBottom: "10%"}}>
    <Grid item style={{display: "flex", paddingLeft: "5rem"}}>
    <Typography variant="h1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", fontWeight: "600", marginRight: "8rem"}}>Join the <span style={{color: "#d3007b"}}>fun.</span></Typography>
    </Grid>
    <Grid item style={{backgroundColor: "#202027", padding: "3rem", borderRadius: "30px", paddingLeft: "3rem"}}>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Name:</Typography>
        <TextField sx={{ input: { color: 'white', fontFamily: "Poppins", fontWeight: "300" } }} variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}}/>
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Email:</Typography>
        <TextField sx={{ input: { color: 'white', fontFamily: "Poppins", fontWeight: "300" } }} variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}} />
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Password:</Typography>
        <TextField sx={{ input: { color: 'white', fontFamily: "Poppins", fontWeight: "300" } }} variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}} />
        </>
        <>
        <br/><Button href="#Main1" style={{color: "white", backgroundColor: "#4853ab", width: "20rem", fontFamily: "Poppins", fontWeight: "400", fontSize: "0.8rem", textTransform: "capitalize", marginTop: "1rem", padding: "0.75rem", borderRadius: "10px"}}>Join Now</Button>
        </>
    </Grid>
</Grid>
    )
}
