import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../../components/Layout'

function suggestion_sent() {

    const router = useRouter()

    return (
        <Layout>
            <p>Suggestion has been sent.</p>
            <Link href={`/institution/${router.query.uuid}`}><a>Go back to reviews</a></Link>
        </Layout>
    )
}

export default suggestion_sent
