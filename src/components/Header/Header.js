import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/abc_logo.svg"

import "./style.css"

export default function Header( {content, page} ) {
    let pageStyle

    if (page === "about us") {
        page = "about-us"
    } 

    return (
        <div className={"header-container"}>
            <div className={"left-col"}>
                <img src={Logo}  className={"logo"}/>
                {content.pages.map((item, idx) => {
                    if (page === item.slug) {
                        pageStyle = "#ffc004"
                    }  else {
                        pageStyle = "white"
                    }

                    return (
                        <Link to={`/?type=${item.title.toLowerCase()}`} className={"links"}>
                        <div style={{color: pageStyle, marginTop: "10px"}}>
                            {item.title}
                        </div>
                        </Link>
                    )
                })}
            </div>
            <div className={"right-col"}>
                <div className={"button"}>
                Contact Us
                </div>
            </div>
        </div>
    )
}  