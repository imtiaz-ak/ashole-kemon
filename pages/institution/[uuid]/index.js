import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import supabase from '../../../utils/supabase'

import Loading from '../../../components/Loading'
import InstitutionCard from '../../../components/InstitutionCard'
import ReviewCard from '../../../components/ReviewCard'
import Layout from '../../../components/Layout'
import md5 from 'md5'

function index({ ip }) {
    const [institution, setInstitution] = useState()
    const [reviewList, setReviewList] = useState([])
    const [loading, setLoading] = useState(true)
    const [ipAddr, setIpAddr] = useState('')
    const [userAgent, setUserAgent] = useState('')
    const router = useRouter()

    const handleSuggestChange = () => {
        router.push(`/institution/${router.query.uuid}/suggestion`)
    }

    const handleAddReview = () => {
        router.push(`/institution/${router.query.uuid}/review`)
    }

    useEffect(async () => {
        const salt = 'bb9afdfb-2c2c-4fb9-acc6-a560c2253619'
        setIpAddr(md5(ip+salt))
        setUserAgent(md5(window.navigator.userAgent+salt))
        if (router.query.uuid) {
            // get the instution object
            // get the reviews list
            let uuid = router.query.uuid

            let { data: institution, institutionError } = await supabase
                .from('institutions')
                .select('*')
                .eq('id', uuid)
            setInstitution(...institution)
            // console.log(...institution);

            if (institutionError) {
                console.log(institutionError)
            }

            let { data: reviews, reviewError } = await supabase
                .from('reviews')
                .select('*')
                .eq('for_institution', uuid)
                .eq('published', true)
            reviews.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
            setReviewList(reviews)

            if (reviewError) {
                console.log(reviewError)
            }

            setLoading(false)
        }
    }, [router])

    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <Layout>
                {/* <button onClick={handleSuggestChange}>Suggest Change</button> */}
                {
                    institution ? (
                        <InstitutionCard name={institution.name} rating={institution.rating} location={institution.location} handleSuggestChange={handleSuggestChange} />)
                        :
                        <></>
                }
                <div className='d-flex justify-content-center my-3'>
                    <button onClick={handleAddReview} className="btn btn-success btn-lg">Add Review</button>
                </div>

                <div className='row' style={{ justifyContent: 'center' }}>

                    <div className="card mb-5 mt-2" style={{ width: '50rem' }}>
                        <h2 className="card-title mt-2" style={{ textAlign: 'center' }}>Reviews</h2>

                        {
                            reviewList.map((item) => (
                                <ReviewCard key={item.id} uuid={item.id} rating={item.rating} pros={item.pros} cons={item.cons} upvotes={item.upvotes} downvotes={item.downvotes} hashed_ip_address={ipAddr} hashed_user_agent={userAgent}/>
                            ))
                        }
                    </div>
                </div>
            </Layout>
        )
    }
}

export async function getServerSideProps({ req }) {
    const forwarded = req.headers["x-forwarded-for"]
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
    return {
        props: {
        ip,
      },
    }
}

export default index
