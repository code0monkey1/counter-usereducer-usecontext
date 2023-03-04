

export const ACTION ={
  INCREASE:"INC",
  DECREASE:"DEC",
  ZERO:"ZERO",
}

export const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
        return state + 1
    case ACTION.DECREASE:
        return state - 1
    case ACTION.ZERO:
        return 0
    default:
        return state
  }
}
