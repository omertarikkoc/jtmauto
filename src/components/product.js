import React from "react"


const Product = ({productName, productPhoto}) => (
    <div>
        <img src={productPhoto} />
        <h3>{productName}</h3>
    </div>
)