import React from "react"
import { Link } from "gatsby"

const CustomButton = ({buttonName, buttonLink}) => (
    <div>
        <a href={buttonLink}>
            <button
            style = {{
                ':hover': {
                    background: `white`,
                    color: `black`
                },
                background: `black`,
                color: `white`,
                padding: `0.5rem`,
                cursor: `pointer`,
                
            }}
            >{buttonName}</button>
        </a>    
    </div>
)

export default CustomButton