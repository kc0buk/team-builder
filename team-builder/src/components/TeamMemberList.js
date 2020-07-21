import React from 'react'

function TeamMemberList(props) {
    const { details } = props

    if (!details) {
        return <h3>Fetching the list...please wait.</h3>
    }

    return (
        <div className=''>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}

export default TeamMemberList