import React from 'react';
import { connect } from 'react-redux';
import './style.css';

import Comment from '../components/comment';
import NewCommentAdd from '../components/newCommentAdd';
import { addComment, delComment, addNewName, addNewText } from '../actions';

let VidgetCommentsApp = (props) => {   
  const { comments, newName, newText, addComment, delComment, addNewName, addNewText } = props;
  return (
    <div className="vidget-comments">
      <h1>Виджет комментариев</h1>

      <NewCommentAdd newName = {newName} newText = {newText} addComment = {addComment} addNewName = {addNewName} addNewText = {addNewText} />
      
      <Comment comments = {comments} delComment = {delComment}/>
    </div> 
  )         
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    newName: state.newName,
    newText: state.newText,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (name, text) => dispatch(addComment(name, text)),
    delComment: (key) => dispatch(delComment(key)),
    addNewName: (newName) => dispatch(addNewName(newName)),
    addNewText: (newText) => dispatch(addNewText(newText)),
  }
}

VidgetCommentsApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(VidgetCommentsApp);

export default VidgetCommentsApp;