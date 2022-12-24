import React from 'react'

export default function Header({ text }) {
    return (
        <header>
            <h2 className="fancy-h1" data-testid="h1tag">{text}</h2>
        </header>
    )
}
