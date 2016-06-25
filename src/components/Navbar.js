import React from "react";

export default class Navbar extends React.Component{
    constructor(){
        super();
    }

    render(){
        const NavbarStyles = {
            backgroundColor: "#f4f4f4",
            border: "none",
            borderBottom: "1px solid gray",
            boxShadow: "0 5px 15px gray",
            height: "75px"
        }
        const centerLogo = {
            textAlign: "center",
            width: "100%"
        }
        return(
            <nav class="navbar navbar-default" style={NavbarStyles}>
                <div class="container-fluid">
                    <div class="navbar-header" style={centerLogo}>
                        <h3>Bitcoin Exchange Rate</h3>
                    </div>
                </div>
            </nav>
        )
    }
}