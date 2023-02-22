import React from 'react'

export default function Contact() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:coreyr103@hotmail.co.uk'
    }
    
  const handleTwitterClick = () => {
    window.open('https://twitter.com/ElimDroflem', '_blank')
  }
    
    return (
        <div className="contact">
            <h1>Elim Droflem</h1>
            <h3>Web3 Builder / Frontend Developer</h3>
            <p>coreyr103@hotmail.co.uk</p>
            <div className="btn">
                <button className="btn-email" onClick={handleEmailClick}>
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </button>
                <button className="btn-twitter" onClick={handleTwitterClick}>
                    <i className="fa-brands fa-twitter"></i>
                    Twitter
                </button>
            </div>
        </div>
    )
}