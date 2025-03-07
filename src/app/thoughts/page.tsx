import React from 'react'
import Link from 'next/link'

export default function ThoughtsPage() {
    let dummy_routing_specific_post = 'specific_post'

    return (
        <div>
            <h1>Page render for the blog.</h1>
            <p><Link href={`/thoughts/${dummy_routing_specific_post}`}>Link to specific Thoughts post!</Link></p>
        </div>
        
    )
}