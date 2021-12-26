import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function suggestion_sent() {

    const router = useRouter()

    return (
        <div>
            <p>Suggestion has been sent.</p>
            <Link href={`/institution/${router.query.uuid}`}><a>Go back to reviews</a></Link>
        </div>
    )
}

export default suggestion_sent
