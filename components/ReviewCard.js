import { useState, useEffect } from "react"
import supabase from "../utils/supabase"

export default function ReviewCard({ uuid, rating, pros, cons }) {
    const [upvoted, setUpvoted] = useState(false)
    const [downvoted, setDownvoted] = useState(false)
    
    useEffect(() => {
        // check whether user uuid exists in an array in the localstorage
        // if exists in array, highlight upvote or downvote

        let upvotedList = JSON.parse(localStorage.getItem('upvotes'))
        
        if (upvotedList === null){
            localStorage.setItem('upvotes', JSON.stringify([]))
            upvotedList = []
        }

        if (upvotedList.includes(uuid)){
            setUpvoted(true)
        }

        let downvotedList = JSON.parse(localStorage.getItem('downvotes'))

        if (downvotedList === null){
            localStorage.setItem('downvotes', JSON.stringify([]))
            downvotedList = []
        }

        if (downvotedList.includes(uuid)){
            setDownvoted(true)
        }

    }, [])

    const addItemToUpvotes = () => {
        let upvotedList = JSON.parse(localStorage.getItem('upvotes'))
        upvotedList = [...upvotedList, uuid]
        localStorage.setItem("upvotes", JSON.stringify(upvotedList));
    }

    const removeItemFromUpvotes = () => {
        let upvotedList = JSON.parse(localStorage.getItem('upvotes'))
        upvotedList = upvotedList.filter((item) => {
            return item !== uuid
        })
        localStorage.setItem("upvotes", JSON.stringify(upvotedList))
    }

    const addItemToDownvotes = () => {
        let downvotedList = JSON.parse(localStorage.getItem('downvotes'))
        downvotedList = [...downvotedList, uuid]
        localStorage.setItem("downvotes", JSON.stringify(downvotedList));
    }

    const removeItemFromDownvotes = () => {
        let downvotedList = JSON.parse(localStorage.getItem('downvotes'))
        downvotedList = downvotedList.filter((item) => {
            return item !== uuid
        })
        localStorage.setItem("downvotes", JSON.stringify(downvotedList))
    }

    const selectUpvote = async() => {
        // sends an upvote for the given review 
        const { data, error } = await supabase
        .from('review_votes')
        .insert([
            { for_review: uuid, helpful_review: true, select:true, ip_address:'abcd', 'user_agent':'asd' },
        ])
    }

    const unselectUpvote = async() => {
        // sends an upvote for the given review 
        const { data, error } = await supabase
        .from('review_votes')
        .insert([
            { for_review: uuid, helpful_review: true, select:false, ip_address:'abcd', 'user_agent':'asd' },
        ])
    }

    const selectDownvote = async() => {
        // sends an upvote for the given review 
        const { data, error } = await supabase
        .from('review_votes')
        .insert([
            { for_review: uuid, helpful_review: false, select:true, ip_address:'abcd', 'user_agent':'asd' },
        ])
    }

    const unselectDownvote = async() => {
        // sends an upvote for the given review 
        const { data, error } = await supabase
        .from('review_votes')
        .insert([
            { for_review: uuid, helpful_review: false, select:false, ip_address:'abcd', 'user_agent':'asd' },
        ])
    }
    
    const handleUpvoteClick = () => {
        if (upvoted){
            // if the review is upvoted, unselect it
            setUpvoted(false)
            removeItemFromUpvotes()
            unselectUpvote()
        } else {
            // otherwise, upvote the review and also make sure to unselect the downvote
            if (downvoted){
                setDownvoted(false)
                removeItemFromDownvotes()
            }
            setUpvoted(true)
            addItemToUpvotes()
            selectUpvote()
        }
    }

    const handleDownvoteClick = () => {
        // if the review is downvoted, unselect it
        if (downvoted){
            setDownvoted(false)
            unselectDownvote()
        } else {
            // otherwise, downvote the review and also make sure to unselect the upvote
            if (upvoted){
                setUpvoted(false)
                removeItemFromUpvotes()
            }
            setDownvoted(true)
            addItemToDownvotes()
            selectDownvote()
        }
    }

    return (
        <div>
            <p>Rating: {rating}</p>
            <p>Pros: {pros}</p>
            <p>Cons: {cons}</p>
            { upvoted?
                <p>*</p> 
                : <></>
            }
            <button onClick={handleUpvoteClick}>upvote</button>
            {
                downvoted?
                <p>*</p>
                : <></>
            }
            <button onClick={handleDownvoteClick}>downvote</button>
        </div>
    )
}

