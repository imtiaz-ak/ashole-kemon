import React from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'

function suggestion_sent() {

    return (
        <Layout>
            <p>Institution will be added after a review process</p>
            <Link href={'/search'}><a>Go back to search</a></Link>
        </Layout>
    )
}

export default suggestion_sent
