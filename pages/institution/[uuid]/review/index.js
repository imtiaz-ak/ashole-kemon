import React, { useState } from 'react'
import { useRouter } from 'next/router'

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
        <form onSubmit={handleSubmit}>
            <input type="text" value={pros} onChange={(e)=>{setPros(e.target.value)}} />
            <input type="text" value={cons} onChange={(e)=>{setCons(e.target.value)}} />
            <input type="number" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default review
