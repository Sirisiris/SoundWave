import React from "react";
import {Button, Box, TableFooter} from "@mui/material";
import tw from '../images/twitter.svg';
import fb from '../images/facebook.svg';

export default function Footer () {
    return(
    <TableFooter style={{backgroundColor: "#202027", display:"flex", justifyContent: "space-around"}}>
        <Box style={{display:"flex", gap:"3rem"}}>
            <Button style={{color: "white", backgroundColor: "transparent", fontFamily: "Poppins", fontWeight: "400", fontSize: "1.1rem", textTransform: "capitalize"}}>About Us</Button>
            <Button style={{color: "white", backgroundColor: "transparent", fontFamily: "Poppins", fontWeight: "400", fontSize: "1.1rem", textTransform: "capitalize"}}>Contact</Button>
        </Box>
        <Box>
            <Button style={{color: "white", backgroundColor: "transparent", fontFamily: "Poppins", fontWeight: "400", fontSize: "1.1rem", textTransform: "capitalize"}}>
                <img src={tw} alt="Twitter" style={{paddingRight: "0.5rem"}}/>
                Twitter
            </Button>
            <Button style={{color: "white", backgroundColor: "transparent", fontFamily: "Poppins", fontWeight: "400", fontSize: "1.1rem", textTransform: "capitalize"}}>
                <img src={fb} alt="Facebook" style={{paddingRight: "0.5rem", marginLeft: "1rem"}}/>
                Facebook
            </Button>
        </Box>
        </TableFooter>
    )
    }
