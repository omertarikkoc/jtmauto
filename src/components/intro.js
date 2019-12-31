import React from "react"
import Image from "../components/image"

const Intro = ({ backgroundImageUrl, tagLine }) => (
    <div>
        <div
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                height: `80vh`,
                textAlign: `center`,
                marginTop: `0`,
                opacity: `0.95`,
                backgroundSize: `cover`,
                display: `block`
            }}
        >
        </div>
        <div
            style = {{
               textAlign: `center`,
               height: `20vh` 
            }}
        >
            <h1 style={{
                color: `black`,
                margin: `0 auto`,
                paddingTop: `3vh`
            }}>
                {tagLine}
            </h1>
        </div>
    </div>

)

export default Intro