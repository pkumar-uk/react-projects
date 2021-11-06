import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    let newstatus = !state.isLoading
    return { ...state, isLoading: newstatus }
  }
  if (action.type === SET_STORIES) {
     
    if (action.payload) {
      let { hits, nbPages, page } = action.payload;
      return {...state, isLoading: false, stories:hits, pages: nbPages, pageno:page }
    } else {
      return {...state,stories:[], pageno:0, pages:0, isLoading:false}
    }  
  }
  if (action.type === HANDLE_PAGE) {
    if (action.payload === 'prev') {
      let { pageno } = state;
      if (pageno < 1) {
        return {...state}
      } else {
        return {...state, pageno: pageno -1 }
      }
       
    }
    if (action.payload === 'next') {
      let { pageno, pages } = state;
      if (pageno < pages) {
        return {...state, pageno: pageno + 1}
      } else {
        return {...state }
      }
    }
    
  }
  if (action.type === HANDLE_SEARCH) {
    return {...state, searchtext:action.payload,pageno:0}  
  }
  if (action.type === REMOVE_STORY) {
    let { stories } = state;
    let newStories = stories.filter((story) => story.objectID !== action.payload)
    return {...state, stories:newStories}  
  }
  return {...state}
}


export default reducer
