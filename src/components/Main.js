import React from "react";
import {Button, Box} from "@mui/material";
import maingirl from "../images/landing-page-girl.png";
import background1 from "../images/background1.png";
import Typography from '@mui/material/Typography';

export default function Main() {
    return(
        <section className="Main1" id="Main" style={{backgroundImage: `url(${background1})`, display: "flex", alignItems: "center", justifyContent: "space-around", paddingTop: "12%"}}>
            <Box className="Main1-photo">
                <img src={maingirl} alt="" style={{width: "85%"}}/>
            </Box>
            <Box className="Main1-text" style={{marginLeft: "-25%"}}>
                <Typography variant="h1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", fontWeight: "300"}}>Feel the Music</Typography>
                <Typography variant="h5" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Stream over 20 thousand songs with one click </Typography>
                <Button style={{color: "white", backgroundColor: "#4853ab", width: "6rem", fontFamily: "Poppins", fontWeight: "400", fontSize: "0.8rem", textTransform: "capitalize"}}>Join Now</Button>
            </Box>
        </section>
    )
}

//<Box style={{backgroundColor: "#bc3a801a", borderRadius: "50%", position: "absolute", top :"0", transform: "translate(100px, 100px)", width: "500px", height: "500px", z-index: "-1"}}></Box>