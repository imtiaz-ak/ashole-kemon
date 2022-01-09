import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import Loading from '../../../../components/Loading'
import axios from 'axios'

function review() {
    const [pros, setPros] = useState('')
    const [cons, setCons] = useState('')
    const [rating, setRating] = useState(0)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        await axios.post('/api/review', {
            for_institution: router.query.uuid,
            rating: rating,
            pros: pros,
            cons:cons
        })
        router.push(`/institution/${router.query.uuid}/review/sent`)
    }

    if (loading){
        return (
            <Loading />
        )
    } else {
        return (
            <Layout>
                <div className='row justify-content-center'>
                    <div className="card col-md-6 shadow mt-4">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Add a Review</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Pros</label>
                                    <textarea
                                        className="form-control my-2"
                                        placeholder="Write down the good things"
                                        type="text"
                                        value={pros}
                                        onChange={(e) => { setPros(e.target.value) }}
                                    />
                                </div> {/* form-group// */}
                                <div className="form-group">
                                    <label>Cons</label>
                                    <textarea
                                        className="form-control my-2"
                                        placeholder="Write down the bad things"
                                        type="text"
                                        value={cons}
                                        onChange={(e) => { setCons(e.target.value) }}
                                    />
                                </div> {/* form-group// */}
                                <div className="form-group">
                                    <label>Rating</label>
                                    <select
                                        className="form-control my-2"
                                        placeholder="Rate from 1 to 5"
                                        type="number"
                                        value={rating}
                                        onChange={(e) => { setRating(e.target.value) }}
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div> {/* form-group// */}
    
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block my-2">Submit</button>
                                </div> {/* form-group// */}
                            </form>
                        </div> {/* card-body.// */}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default review
