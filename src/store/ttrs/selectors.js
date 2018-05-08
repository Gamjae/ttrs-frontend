export const initialState = {
  username: undefined,
  password: undefined,
  // Will use later
  // grade: undefined,
  // college: undefined,
  // department: undefined,
  // major: undefined,
  // notRecommends: undefined,
  isSignedIn: false,
  isSignUpPage: false,
  isRecommendTab: true,
  isBookmarkTab: false,
  isReceivedTab: false,
  isSettingTab: false,
  title: 'write title',
  memo: 'write memo',
  timeSlotList: [{
    id: 1,
    dayOfWeek: '1',
    startTime: '2',
    endTime: '3',
    classroom: '4',
  },{
    id: 5,
    dayOfWeek: '5',
    startTime: '6',
    endTime: '7',
    classroom: '8',
  }],

}
