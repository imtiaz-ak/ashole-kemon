import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SearchBox({ homePage }) {
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
        <div className="d-flex container align-center justify-content-center" style={homePage ? {
            height: '60vh',
            alignItems: 'center',
            flexDirection: 'column',
            maxWidth: '750px'
        } : {
            alignItems: 'center',
            maxWidth: '750px',
            flexDirection: 'column',
        }}
        >
            <h2 className='' style={homePage ? { textAlign: 'center', fontFamily: 'Roboto, sans-serif' } : { display: 'none' }}>Read Anonymous Reviews Before You Decide Where To Study</h2>

            <form onSubmit={handleSearch} className="d-flex container align-center justify-content-center input-group-lg my-3 mt-4">

                <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                    style={{
                        borderBottomRightRadius: 0,
                        borderTopRightRadius: 0,
                        border: '3px solid #ced4da',
                        borderRight: 0
                    }}
                />
                {/* <input type="search" aria-label="Search" /> */}
                <button
                    className="btn btn-success"
                    value='submit'
                    type="submit"
                    style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        border: '2.75px solid #198754'
                    }}
                >Search</button>
            </form>
        </div>
    )
}
