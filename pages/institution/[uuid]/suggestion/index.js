import React, { useState } from 'react'
import { useRouter } from 'next/router'

function suggestion() {
    const [suggestion, setSuggestion] = useState('')
    const [reason, setReason] = useState('')

    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        // make api call
        router.push(`/institution/${router.query.uuid}/suggestion/sent`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={suggestion} onChange={(e)=>{setSuggestion(e.target.value)}} />
            <input type="text" value={reason} onChange={(e)=>{setReason(e.target.value)}} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default suggestion
