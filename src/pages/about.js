import * as React from 'react'
import { Link } from 'gatsby'
import { Seo } from "../components/Seo.js"

export default function AboutPage() {
    return (
        <>
            <Seo
                title="About This Site"
                description="Description" />
            <main>
                <h1>About This Site</h1>
                <Link to="/" >Back To Home</Link>
            </main>
        </>
    )
}