import React from "react";
import content from "../utils/content.json"
import Container from "../components/Container/Container"
import useQuery from "../hooks/useQuery"
import Slide1 from "../assets/slide_one.jpg"
import Slide2 from "../assets/slide_two.jpg"
import Slide3 from "../assets/slide_three.jpg"

export default function Main() {

    let query = useQuery()
    let pageQuery = query.get("type");
    let pageInfo = content
    let background

    if (pageQuery === "industires") {
        background = Slide1
    } else if (pageQuery === "services") {
        background = Slide2
    } else if (pageQuery === "about us") {
        background = Slide3
    } else {
        background = Slide1
    }

    return (
        <div className={"main"} style={{
            backgroundImage: `url(${background})`
        }}>
            <Container content={pageInfo} page={pageQuery} style={{ maxWidth: "1440px" }} />
        </div>
    )
} 