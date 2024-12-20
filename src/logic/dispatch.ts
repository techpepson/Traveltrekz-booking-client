//global function to be used for dispatching reducers

export function dispatchFunction(
  dispatch: (arg0: any) => any,
  payload: any,
  reducer: (arg0: any) => any
) {
  console.log(payload);
  return dispatch(reducer(payload));
}
