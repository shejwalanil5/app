import React, { useState } from 'react'
import './CommentBox.css'
import { FaRegComments } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const CommentBox = () => {

  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Comment submitted: ${comment}`);
    setComment(''); // Reset the comment after submission
  };

  const [showButton, setShowButton] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setShowButton(!showButton); // Toggle the visibility of the button
  };


  return (
    <div className="comment-box">

      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        ></textarea>
        <button className='post-button' type="submit">Post</button>
      </form>
      <div className='comment'>
        <p>comment 0</p>
        <p className='p' onClick={handleClick}>All<span></span> <IoIosArrowDown /></p>

      </div>
      {showButton && <p className='button'>All</p>}
      <div className='comments-section'>
        <h3><FaRegComments /></h3>
        <p>Your kudos and feedback are welcome!</p>
        <p className='p-text'>Share your thoughts using the comment box above.</p>
      </div>
     <hr/>
    </div>



  )
}

export default CommentBox