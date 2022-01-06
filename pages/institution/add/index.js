import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'

function add() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [imageURL, setImageURL] = useState('')

    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        // make api call
        router.push(`/institution/add/sent`)
    }

    return (
        <Layout>

            <div className='row justify-content-center'>
                <div className="card col-md-6 shadow mt-4">
                    <div className="card-body">
                        <h3 className="card-title mb-4">Suggest Change</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <textarea
                                    className="form-control my-2"
                                    placeholder="Write a suggestion"
                                    type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <label>Location</label>
                                <textarea
                                    className="form-control my-2"
                                    placeholder="Give a reason"
                                    type="text"
                                    value={location}
                                    onChange={(e) => { setLocation(e.target.value) }}
                                />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <label>Image</label>
                                <input
                                    className="form-control my-2"
                                    placeholder="Give a reason"
                                    type="text"
                                    value={imageURL}
                                    onChange={(e) => { setImageURL(e.target.value) }}
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

export default add
