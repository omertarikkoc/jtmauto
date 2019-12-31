import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProductList from "../components/product-list"
import siteData from "../data/data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductList products={siteData.products}></ProductList>
  </Layout>
)

export default IndexPage
