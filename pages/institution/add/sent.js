import React from 'react'
import Link from 'next/link'

function suggestion_sent() {

    return (
        <div>
            <p>Institution will be added after a review process</p>
            <Link href={'/search'}><a>Go back to search</a></Link>
        </div>
    )
}

export default suggestion_sent
