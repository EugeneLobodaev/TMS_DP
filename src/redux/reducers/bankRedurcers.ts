export const defaultState = {
  cash: 0,
  bank: 100,
};

export const bankReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    case "CLEAR_CASH":
      return { ...state, cash: 0 };

    case "MIL":
      return { ...state, cash: 10000000 };
    default:
      return state;
  }
};
