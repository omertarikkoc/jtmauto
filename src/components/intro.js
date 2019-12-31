import React from "react"
import Image from "../components/image"

const Intro = ({backgroundImageUrl, tagLine}) => (
    <div
        style = {{
            backgroundImage: `url(${backgroundImageUrl})`,
            height: `45vh`,
            textAlign: `center`,
            marginTop: `0`,
            opacity: `0.95`,
            backgroundSize: `cover`
        }}
    >
        <h1 style={{
            color:`white`,
            margin: `0 auto`,
            paddingTop: `15vh`
            }}>
                {tagLine}
            </h1>
    </div>
)

export default Intro