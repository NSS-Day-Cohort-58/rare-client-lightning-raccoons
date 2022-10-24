import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Comments = () => {
    const { postId } = useParams()
    const [comments, setComments] = useState([])
    const navigate = useNavigate()


    useEffect(
        () => {
            fetch(`http://localhost:8088/comments/${postId}`)
                .then(response => response.json())
                .then((commentsArray) => {
                    setComments(commentsArray)
                })
        },
        [postId])



    return <section>
        <h2>All Comments</h2>
        <div className="commentsSection">
            {
                comments.map((comment) => {
                    return <li className="commentBox">
                        <div className="postInfo">
                            <p>{comment?.content}</p>
                        </div>
                    </li>
                }
                )
            }
        </div>
        <button
            value={postId}
            onClick={(clickEvent) => navigate(`/addComment/${postId}`)}
            className="add-button"
        >Add Comment</button>
    </section >
}
