import { useApp } from "../context/AppContext";

export default function Stats() {
    const { activities } = useApp();

    if (!activities || activities.length === 0) return <h2>Loading...</h2>;

    const totalActivities = activities.length;
    const goalAchieved = activities.filter((a) => a.goalAchieved).length;
    const goalNotAchieved = activities.filter((a) => !a.goalAchieved).length;

    window.appState = {
        totalActivities,
        goalAchieved,
        goalNotAchieved,
    };

    return (
        <div>
            <h2>Stats Dashboard</h2>
            <p>Total Activities: <strong data-testid="total-activities">{totalActivities}</strong></p>
            <p>Goals Achieved: <strong data-testid="goal-achieved">{goalAchieved}</strong></p>
            <p>Goals Missed: <strong data-testid="goal-not-achieved">{goalNotAchieved}</strong></p>
        </div>
    );
}