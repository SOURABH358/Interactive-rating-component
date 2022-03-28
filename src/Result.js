import React from "react"

const Result = (props) =>{
    return (
        <section className="Card result">
            <img className = "result-image" src = "./images/illustration-thank-you.svg"/>
            <button className="score">You Selected {props.rating} out of 5</button>
            <h1 className="heading">Thank you!</h1>
            <p className="para">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </section>
    )
}
export default Result;