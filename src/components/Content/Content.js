import React from "react";
import { useLocation } from 'react-router-dom';
import useQuery from "../../hooks/useQuery";

import "./style.css"
 
export default function Content ( { content } ) {

    let query = useQuery()
    let pageQuery = query.get("type");
    let location = useLocation();
    let path = location

    if (pageQuery === "about us") {
        pageQuery = "about-us"
    }

    if (path.search === "") {
        return (
            <div>
            <div className={"text-wrapper"}>
                <div className={"left-content"}>
                    <h1>{content.pages[0].blocks[0].cta}</h1>
                </div>
                <div className={"right-content"}>
                    <p>{content.pages[0].blocks[0].subhead}</p>
                </div>
            </div>
            <div className={"cta-box"}>
                <div className={"cta"}>
                    <p>{content.pages[0].blocks[0].cta}</p>
                </div>
                <div>
                    <p>Lets Talk</p>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className={"content-container"}>
            {content.pages.map((page, idx) => {
                if (pageQuery === page.slug) {
                    return (
                        <div>
                            <div className={"text-wrapper"}>
                                <div className={"left-content"}>
                                    <h1>{page.blocks[0].cta}</h1>
                                </div>
                                <div className={"right-content"}>
                                    <p>{page.blocks[0].subhead}</p>
                                </div>
                            </div>
                            <div className={"cta-box"}>
                                <div className={"cta"}>
                                    <p>{page.blocks[0].cta}</p>
                                </div>
                                <div>
                                    <p>Lets Talk</p>
                                </div>
                            </div>
                        </div>
                    )
                } 
            })}
        </div>
    )
}