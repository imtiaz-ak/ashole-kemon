import React, { useState } from 'react'
import { useRouter } from 'next/router'

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
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
            <input type="text" value={imageURL} onChange={(e)=>{setImageURL(e.target.value)}} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default add
