import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import supabase from '../../../utils/supabase'

import Loading from '../../../components/Loading'
import InstitutionCard from '../../../components/InstitutionCard'
import ReviewCard from '../../../components/ReviewCard'
import Layout from '../../../components/Layout'

function index() {
    const [institution, setInstitution] = useState(null)
    const [reviewList, setReviewList] = useState([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const handleSuggestChange = () => {
        router.push(`/institution/${router.query.uuid}/suggestion`)
    }

    const handleAddReview = () => {
        router.push(`/institution/${router.query.uuid}/review`)
    }

    useEffect(async () => {
        if (router.query.uuid) {
            // get the instution object
            // get the reviews list
            let uuid = router.query.uuid

            let { data: institution, institutionError } = await supabase
                .from('institutions')
                .select('*')
                .eq('id', uuid)
            setInstitution(institution)

            if (institutionError) {
                console.log(institutionError)
            }

            let { data: reviews, reviewError } = await supabase
                .from('reviews')
                .select('*')
                .eq('for_institution', uuid)
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
                Institution page
                <button onClick={handleSuggestChange}>Suggest Change</button>
                <button onClick={handleAddReview}>Add Review</button>
                {
                    institution ?
                        <InstitutionCard name={institution.name} rating={institution.rating} location={institution.location} />
                        :
                        <></>
                }
                {
                    reviewList.map((item) => (
                        <ReviewCard key={item.id} uuid={item.id} rating={item.rating} pros={item.pros} cons={item.cons} />
                    ))
                }
            </Layout>
        )
    }
}

export default index
