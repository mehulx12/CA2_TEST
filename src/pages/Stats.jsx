import { useApp } from "../context/AppContext";

export default function Stats() {
    const { activities } = useApp();

    if (!activities || activities.length === 0) return <h2>Loading...</h2>;

    const validActivities = activities.filter(
        (a) =>
            a.steps > 0 &&
            a.caloriesBurned > 0 &&
            a.workoutMinutes > 0 &&
            typeof a.goalAchieved === "boolean"
    );

    const totalActivities = validActivities.length;

    // Using .reduce() to satisfy the requirement "Must use map, filter, reduce"
    const { goalAchievedCount, goalNotAchievedCount } = validActivities.reduce(
        (acc, a) => {
            if (a.goalAchieved) acc.goalAchievedCount++;
            else acc.goalNotAchievedCount++;
            return acc;
        },
        { goalAchievedCount: 0, goalNotAchievedCount: 0 }
    );

    window.appState = {
        totalActivities,
        goalAchievedCount,
        goalNotAchievedCount,
    };

    return (
        <div>
            <h2>Stats Dashboard</h2>
            <p>Total Activities: <strong data-testid="total-activities">{totalActivities}</strong></p>
            <p>Goals Achieved: <strong data-testid="goal-achieved">{goalAchievedCount}</strong></p>
            <p>Goals Missed: <strong data-testid="goal-not-achieved">{goalNotAchievedCount}</strong></p>
        </div>
    );
}