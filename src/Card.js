import React from "react"
import Result from "./Result";
import Score from "./Score"
const Card = (props) => {
    let [isSubmit, setIsSubmit] = React.useState(false);
    let [rating, setRating] = React.useState(0)

    return (
        isSubmit?
        <Result 
        rating = {rating}
        />
        :
        <Score 
        isSubmit = {isSubmit}
        setIsSubmit = {setIsSubmit}
        rating = {rating}
        setRating = {setRating}
        />

    )
}
export default Card;