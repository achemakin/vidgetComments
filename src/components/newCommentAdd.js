import React from 'react';

const NewCommentAdd = ({ newName, newText, addComment, addNewName, addNewText }) => {
  return ( 
    <form className="new-comment" onSubmit={event => addComment(event)}>
      <fieldset className="new-comment__fieldset">
        <legend className="new-comment__legend">
          <h2 className="new-comment__title">Новый коментарий</h2>
        </legend>
    
        <input className="new-comment__name" type="text" placeholder="Ваше имя" required value={newName} onChange={event => addNewName(event)}  />           

        <textarea className="new-comment__text" placeholder="Введите коментарий" required value={newText} onChange={event => addNewText(event)} />

        <button className="new-comment__btn" type="submit">Добавить</button>
      </fieldset>
    </form>
  )
}

export default NewCommentAdd;