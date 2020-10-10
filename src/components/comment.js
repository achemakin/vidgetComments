import React from 'react';

const Comment = props => {
  let { comments, delComment } = props;
   
  return (
    <ul className="comments-list">
      {
        comments.map(comment => {
          return (
            <li className="comments-list__comment" key = {comment.key}>
              <h3 className="comments-list__name"> {comment.name} </h3>

              <p className="comments-list__text"> {comment.text}</p>

              <time className="comments-list__time"> {comment.date} </time>
              
              <button className="comments-list__button" aria-label="Кнопка удалить" onClick={event => {delComment(comment.key)}} />
            </li>
          )
        })           
      }
    </ul>   
  )          
} 

export default Comment;