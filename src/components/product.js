import React from "react"


const Product = ({productName, productPhoto}) => (
    <div
    style={{
        border: `1px solid gray`
    }}>
        <img style={{
            maxWidth:`300px`,
            
            }} 
            src={productPhoto} />
        <h3 style={{
            textAlign:`center`
        }}>{productName}</h3>
    </div>
)

export default Product