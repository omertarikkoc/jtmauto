import React from "react"

import Product from "./product"

const ProductList = ({ products }) => {
    const productListMap = products.map((product) =>
        <Product
            style={{ 
                flex: `1 16%` 
            }}
            productName={product.productName}
            productPhoto={product.productImage}>
        </Product>)

    return (
        <div style={{
            display: `flex`,
            flexWrap: `wrap`,
        }}>

            {productListMap}

        </div>
    )
}

export default ProductList