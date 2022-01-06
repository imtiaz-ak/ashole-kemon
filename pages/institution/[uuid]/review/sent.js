import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'

function review_sent() {
    const router = useRouter()

    return (
        <Layout>
            <p>Review has been sent.</p>
            <Link href={`/institution/${router.query.uuid}`}><a>Go back to reviews</a></Link>
        </Layout>
    )
}

export default review_sent
