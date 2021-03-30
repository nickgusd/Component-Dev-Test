import React from "react";
import Header from "../Header/Header"
import Content from "../Content/Content"
import  "./style.css"


export default function Container ( {content, page} ) {

    return (
        <div className={"container"}>
            <div className={"content-wrapper"}>
            <Header  content={content} page={page} />
            <Content content={content} />
            </div>
        </div>
    )
} 