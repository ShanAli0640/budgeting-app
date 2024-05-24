import React from 'react'
import TemplatePage from '../../../components/templatePage'

export default function HomePage() {
    return (
        <>
            <TemplatePage title="Dashboard" />
            <a href="/api/auth/logout">yo</a>
        </>
    )
}
