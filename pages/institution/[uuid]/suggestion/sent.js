import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../../components/Layout'

function suggestion_sent() {

    const router = useRouter()

    return (
        <Layout>
            <div className="d-flex mt-3" style={{
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                fontSize: '22px',
            }}>
                <p >Thank you for your suggestion. Your feedback helps us keep the information up to date.</p>
                <Link href={`/institution/${router.query.uuid}`}>
                    <button className='btn btn-secondary'>Go back to reviews</button>
                </Link>
            </div>
        </Layout>
    )
}

export default suggestion_sent
