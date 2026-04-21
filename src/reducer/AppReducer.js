export const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                activities: action.payload.activities || action.payload,
                loading: false,
            };
        default:
            return state;
    }
};