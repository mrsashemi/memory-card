import React, { useEffect, useState } from "react";

export function SetScore(props) {
    const [bestScore, setBestScore] = useState(props.score.length)
   
    useEffect(() => {
        if (bestScore <= props.score.length) setBestScore(() => props.score.length)
    }, [props.score]);

    return (
        <div className="scoreContainer">
            <h4 className="currentScore">Current Score: {props.score.length}</h4>
            <h4 className="bestScore">Best Score: {bestScore}</h4>
        </div>
    )

}