const DoVidgetComments = (state = [], action) => {
  const comments = state.comments;
  let s =[];
  let key = (comments.length === 0) ? 0 : (comments[0].key+1);

  const getDate = () => {
    let d = new Date();
    return (( d.getDay()<10 ? d.getDay()+10 : d.getDay() ) + '.' + ( d.getMonth()+1<10 ? '0'+(d.getMonth()+1) : d.getMonth()+1 ) + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes());
  }

  switch(action.type) {
    case 'ADD_COMMENT':
      s = [{ key: key, name: state.newName, text: state.newText, date: getDate() }, ...comments];
      
      localStorage.setItem('commentsList', JSON.stringify(s)); 
      
      return (                
        {
          comments: s,
          newName: '',
          newText: '',
        }
      )

    case 'DEL_COMMENT': 
      comments.forEach((comment) => {
        if (comment.key !== action.key) {                        
          s = [...s, comment]                 
        } 
      }); 
      
      localStorage.setItem('commentsList', JSON.stringify(s)); 
      
      return {
        comments: s,
        newName: state.newName,
        newText: state.newText,
      }

    case 'ADD_NEW_NAME':
      return {
        comments: comments,
        newName: action.newName,
        newText: state.newText,
      }

    case 'ADD_NEW_TEXT':
      return {
        comments: comments,
        newName: state.newName,
        newText: action.newText,
      }    

    default:
      return state
  }
}

export default DoVidgetComments;