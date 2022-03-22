import './Card.css';
import React from "react";

export default function Card({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="Card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front image" />
                <img
                    className="back"
                    src="/img/cover.png"
                    onClick={handleClick}
                    alt="card back image" />
            </div>
        </div>
    )
}