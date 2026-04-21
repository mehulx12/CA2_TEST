import { useApp } from "../context/AppContext";

export default function Stats() {
    const { activities } = useApp();

    const totalActivities = activities.length;

    const goalAchieved = activities.filter(
        (a) => a.goalAchieved === true
    ).length;

    const goalNotAchieved = activities.filter(
        (a) => a.goalAchieved === false
    ).length;

    // 🚨 MUST HAVE
    window.appState = {
        totalActivities,
        goalAchieved,
        goalNotAchieved,
    };

    return (
        <div>
            <h3 data-testid="total-activities">{totalActivities}</h3>
            <h3 data-testid="goal-achieved">{goalAchieved}</h3>
            <h3 data-testid="goal-not-achieved">
                {goalNotAchieved}
            </h3>
        </div>
    );
}