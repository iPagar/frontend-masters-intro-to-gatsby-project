import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'

export default function IndexPage() {

    return (
        <Layout>
            <h1>Hello!</h1>
            <Link to="/about" >About This Site</Link>
        </Layout>
    )
}