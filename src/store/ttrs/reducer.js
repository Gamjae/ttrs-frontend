import { initialState } from './selectors'
import * as actions from './actions'

const ttrsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNIN_RESPONSE:
      console.log(action.studentInfo)
      console.log('main page')
      return {
        ...state,
        ...action.studentInfo,
        isSignedIn: true,
      }
    case actions.GO_SIGNUPPAGE_REQUEST:
      console.log('sign up page')
      return {
        ...state,
        isSignUpPage: true,
      }
    case actions.SIGNUP_RESPONSE:
      console.log('sign up complete')
      console.log(action.studentInfo)
      return {
        ...initialState,
        colleges: state.colleges,
        departments: state.colleges[0].departments,
        majors: state.colleges[0].departments[0].majors,
      }
    case actions.SIGNOUT_REQUEST:
      console.log('sign in page')
      return {
        ...initialState,
        colleges: state.colleges,
        departments: state.colleges[0].departments,
        majors: state.colleges[0].departments[0].majors,
      }
    case actions.RECOMMENDTAB_REQUEST:
      console.log('recommend tab')
      return {
        ...state,
        isRecommendTab: true,
      }
    case actions.BOOKMARKTAB_REQUEST:
      console.log('bookmark tab')
      return {
        ...state,
        isBookmarkTab: true,
      }
    case actions.RECEIVEDTAB_REQUEST:
      console.log('received tab')
      return {
        ...state,
        isReceivedTab: true,
      }
    case actions.SETTINGTAB_REQUEST:
      console.log('setting tab')
      return {
        ...state,
        isSettingTab: true,
      }
    case actions.MODIFY_MEMO_REQUEST:
      console.log('modify Memo')
      return {
        ...state,
        memo: action.content,
      }
    case actions.MODIFY_TITLE_REQUEST:
      console.log('modify Title')
      return {
        ...state,
        title: action.content,
      }
    case actions.GET_COLLEGELIST_RESPONSE:
      return {
        ...state,
        colleges: action.colleges,
        departments: action.colleges[0].departments,
        majors: action.colleges[0].departments[0].majors,
      }
    case actions.CHANGE_DEPARTMENTLIST_REQUEST:
      return {
        ...state,
        departments: state.colleges[action.collegeIndex].departments,
        majors: state.colleges[action.collegeIndex].departments[0].majors,
      }
    case actions.CHANGE_MAJORLIST_REQUEST:
      return {
        ...state,
        majors: action.departmentIndex === '' ? [] : state.departments[action.departmentIndex].majors,
      }
    case actions.SEARCH_LECTURE_RESPONSE:
      return {
        ...state,
        lectureList: action.lectureList,
      }
    default:
      return state
  }
}

export default ttrsReducer
