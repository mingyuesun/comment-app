// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export default function(state, action){
	if (!state) {
		return {comments: []}
	}

	switch(action.type){
		case INIT_COMMENTS:
			return {comments: action.comments}
		case ADD_COMMENT:
			return [...state.comments, action.comment]
		case DELETE_COMMENT:
			return [...state.comments.splice(0, action.index), ...state.comments.splice(action.index+1)]
		default:
			return state		
	}
}

// action creators
export const initComments = (comments) => {
	return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
	return { type: ADD_COMMENT, comment }
}

export const deleteComment = (index) => {
	return { type: DELETE_COMMENT, index }
}