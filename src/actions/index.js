export const addComment = event => {     
  event.preventDefault(); 
  return {
    type: 'ADD_COMMENT',
  }
}

export const delComment = key => {
  return {
    type: 'DEL_COMMENT',
    key,        
  }
}

export const addNewName = event => {    
  return {
    type: 'ADD_NEW_NAME',
    newName: event.target.value,
  }
}

export const addNewText = event => {
  return {
    type: 'ADD_NEW_TEXT',
    newText: event.target.value,
  }
} 


