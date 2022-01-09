import React from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'

function suggestion_sent() {

    return (
        <Layout>
            <div className="d-flex mt-3" style={{
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                fontSize: '22px',
            }}>
                <p >Thank you for your suggestion. The institution will be added after going through a manual review process</p>
                <Link href={'/search'}>

                    <button className='btn btn-secondary'>Go back to search</button>
                </Link>
            </div>
        </Layout >
    )
}

export default suggestion_sent
