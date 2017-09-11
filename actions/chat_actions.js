export const fetchMessages = (roomName) => async (dispatch) => {
  try {
    console.log(roomName);
    dispatch({ type: FETCH_MESSAGES, payload: data });
    // callback(); could passin function here
  } catch(e) {
    console.error(e);
  }
};