import React from "react";
import {Button, Box} from "@mui/material";
import maingirl from "../images/landing-page-girl.png";
import Typography from '@mui/material/Typography';

export default function Main() {
    return(
        <section className="Main1" style={{backgroundColor: "#302e3a", display: "flex", alignItems: "center", justifyContent: "space-around", paddingTop: "12%"}}>
            <Box className="Main1-photo">
                <img src={maingirl} alt="" style={{width: "85%"}}/>
            </Box>
            <Box className="Main1-text" style={{marginLeft: "-25%"}}>
                <Typography variant="h1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Feel the Music</Typography>
                <Typography variant="h5" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Stream over 20 thousand songs with one click </Typography>
                <Button style={{color: "white", backgroundColor: "#4853ab", width: "6rem", fontFamily: "Poppins", fontWeight: "400", fontSize: "0.8rem", textTransform: "capitalize"}}>Join Now</Button>
            </Box>
        </section>
    )
}

