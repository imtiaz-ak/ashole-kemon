import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function review_sent() {
    const router = useRouter()

    return (
        <div>
            <p>Review has been sent.</p>
            <Link href={`/institution/${router.query.uuid}`}><a>Go back to reviews</a></Link>
        </div>
    )
}

export default review_sent
