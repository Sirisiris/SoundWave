import React from "react";
import {Button, Box, Typography } from "@mui/material";
import covers from "../images/covers.jpg";
import icon1 from "../images/microphone.svg";
import icon2 from "../images/albums.svg";
import icon3 from "../images/more.svg";

export default function Main2() {
    return(
    <section className="Main2" id="Main2" style={{backgroundColor: "#302e3a", display: "flex", justifyContent: "center", alignItems: "center", gap: "5%", paddingTop: "10%", paddingBottom: "10%"}}>

        <Box>
            <Typography variant="h3" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", fontSize: "3.5rem"}}>Discover new music</Typography> 
            <Box style={{display: "flex"}}>
                <Button style={{backgroundColor: "#202027", display: "flex", flexDirection: "column", gap: "15px", width: "6.5rem", height: "6rem", margin: "0.5rem", alignItems: "center"}}>
                    <img src={icon1} alt="Charts logo" style={{width: "2.5rem"}}/>
                    <Typography variant="body2" style={{fontFamily: "Poppins", fontSize: "1rem", color: "#FFFFFD", textTransform: "capitalize"}}> Charts</Typography>
                </Button>

                <Button style={{backgroundColor: "#202027", display: "flex", flexDirection: "column", gap: "15px", width: "6rem", height: "6rem", margin: "0.5rem", alignItems: "center"}}>
                    <img src={icon2} alt="Albums logo" style={{width: "2.5rem"}}/>
                    <Typography variant="body2" style={{fontFamily: "Poppins", fontSize: "1rem", color: "#FFFFFD", textTransform: "capitalize"}}> Albums</Typography>
                </Button>
                <Button style={{backgroundColor: "#202027", display: "flex", flexDirection: "column", gap: "15px", width: "6rem", height: "6rem", margin: "0.5rem", alignItems: "center"}}>
                    <img src={icon3} alt="More logo" style={{width: "2.5rem"}}/>
                    <Typography variant="body2" style={{fontFamily: "Poppins", fontSize: "1rem", color: "#FFFFFD", textTransform: "capitalize"}}> More</Typography>
                </Button>
            </Box>
            <Box>
                <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", fontSize: "1.2rem", fontWeight: "300", paddingTop: "3%"}}>By joining you can benefit by listening to the latest albums released.</Typography>
            </Box>
        </Box>

        <Box>
            <img src={covers} alt="Cover"/>
        </Box> 
    </section>
    )
}
