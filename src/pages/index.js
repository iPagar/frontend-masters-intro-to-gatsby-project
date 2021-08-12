import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function IndexPage() {
    const data = useStaticQuery(graphql`
        query GetTitleSite {
            site(siteMetadata: {}) {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const meta = data?.site?.siteMetadata ?? {}

    return (
        <>
            <header>
                <Link to="/">{meta.title}</Link>
            </header>
            <main>
                <h1>Hello!</h1>
                <Link to="/about" >About This Site</Link>
            </main>
        </>
    )
}