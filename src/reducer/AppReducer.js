export const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                activities: action.payload.activities || action.payload,
                loading: false,
            };
        case "UPDATE_ACTIVITY":
            return {
                ...state,
                activities: state.activities.map(activity => 
                    activity.activityId === action.payload.activityId ? action.payload : activity
                )
            };
        case "TOGGLE_GOAL":
            return {
                ...state,
                activities: state.activities.map(activity => {
                    if (activity.activityId === action.payload) {
                        let newGoalAchieved = !activity.goalAchieved;
                        if (activity.steps >= 8000) {
                            newGoalAchieved = true;
                        }
                        if (newGoalAchieved === activity.goalAchieved) {
                            return activity; // No duplicate update
                        }
                        return { ...activity, goalAchieved: newGoalAchieved };
                    }
                    return activity;
                })
            };
        default:
            return state;
    }
};