import React from 'react'

export default function Footer() {
    const handleRickrollClick = () => {
        window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0', '_blank')
    }
    
    const handleGithubClick = () => {
        window.open('https://github.com/ElimDroflem?tab=repositories', '_blank')
    }
    
    return (
        <footer>
            <i className="fa-brands fa-youtube fa-2xl" onClick={handleRickrollClick} ></i>
            <i className="fa-brands fa-square-facebook fa-2xl" onClick={handleRickrollClick} ></i>
            <i className="fa-brands fa-square-instagram fa-2xl" onClick={handleRickrollClick} ></i>
            <i className="fa-brands fa-square-github fa-2xl" onClick={handleGithubClick} ></i>
        </footer>
    )
}