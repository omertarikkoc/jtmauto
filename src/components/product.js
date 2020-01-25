import React from "react"


const Product = ({productName, productPhoto}) => (
    <div
    style={{
        border: `1px solid gray`
    }}>
        <img style={{
            maxWidth:`300px`,
            width: `300px`
            }} 
            src={productPhoto} />
        <h6 style={{
            textAlign:`center`
        }}>{productName}</h6>
    </div>
)

export default Product