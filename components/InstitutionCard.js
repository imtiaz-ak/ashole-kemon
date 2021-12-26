import React from 'react'

function InstitutionCard({ name, location, rating }) {
    return (
        <div>
            <div>{ name }</div>
            <div>{ location }</div>
            <div>{ rating }</div>
        </div>
    )
}

export default InstitutionCard
