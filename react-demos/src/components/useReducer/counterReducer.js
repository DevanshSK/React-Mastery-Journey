export const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + (action.payload || 1) };
        case "DECREMENT":
            return { ...state, count: state.count - (action.payload || 1) };
        case "RESET":
            return { ...state, count: 0 };
    }
}
