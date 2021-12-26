import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('')

    const router = useRouter()

    useEffect(() => {
        setSearchTerm(router.query['q'])
    }, [router])

    const handleSearch = (event) => {
        event.preventDefault()
        router.push({
            pathname: '/search',
            query: { q: searchTerm }
        })
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
            <input type="submit" value="Submit" />
        </form>
    )
}
