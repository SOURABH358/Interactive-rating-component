import React from "react"

const Score = (props) =>{
    function SubmitScore(){
        props.setIsSubmit(prevValue => !prevValue)
    }
    function setScore(event){
        Array.from(event.currentTarget.children).forEach(element => {
          element.className = "points"
        })
        props.setRating(event.target.id)
        event.target.classList.add('highlight')
    }
    return (
        <section className="Card">
            <div className="star">
                <img src = "./images/icon-star.svg" />
            </div>
            <h1 className="heading">How did we do?</h1>
            <p className="para">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="ratings" onClick={setScore}>
                <div className="points" id = "1">1</div>
                <div className="points" id = "2">2</div>
                <div className="points" id = "3">3</div>
                <div className="points" id = "4">4</div>
                <div className="points" id = "5">5</div>
            </div>

            <button 
            className="submit"
            onClick={SubmitScore}
            >
            Submit
            </button>

        </section>
    )
}
export default Score;