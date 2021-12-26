import React from 'react'
import Link from 'next/link'

export default function SearchResultCard({ uuid, name, location }) {
    return (
        <div>
            <image />
            <h2>{ name }</h2>
            <h3>{ location }</h3>
            <Link href={`/institution/${uuid}/`}><button>View Details</button></Link>
        </div>
    )
}
