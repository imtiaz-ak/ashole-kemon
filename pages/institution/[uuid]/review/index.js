import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'

function review() {
    const [pros, setPros] = useState('')
    const [cons, setCons] = useState('')
    const [rating, setRating] = useState(0)

    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        // make api call
        router.push(`/institution/${router.query.uuid}/review/sent`)
    }

    return (
        <Layout>
            <div className='row justify-content-center'>
                <div className="card col-md-6 shadow mt-4">
                    <div className="card-body">
                        <h3 className="card-title mb-4">Add Review</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Pros</label>
                                <textarea
                                    className="form-control my-2"
                                    placeholder="Write a pros"
                                    type="text"
                                    value={pros}
                                    onChange={(e) => { setPros(e.target.value) }}
                                />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <label>Cons</label>
                                <textarea
                                    className="form-control my-2"
                                    placeholder="Write a cons"
                                    type="text"
                                    value={cons}
                                    onChange={(e) => { setCons(e.target.value) }}
                                />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <label>Rating</label>
                                <input
                                    className="form-control my-2"
                                    placeholder="Give a rating"
                                    type="number"
                                    value={rating}
                                    onChange={(e) => { setRating(e.target.value) }}
                                />
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

export default review
