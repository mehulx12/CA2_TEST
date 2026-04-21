import { useApp } from "../context/AppContext";

export default function Activities() {
    const { activities } = useApp();

    if (!activities || activities.length === 0)
        return <h2>Loading...</h2>;

    // ✅ VALID FILTER (IMPORTANT)
    const validActivities = activities.filter(
        (a) =>
            a.steps > 0 &&
            a.caloriesBurned > 0 &&
            a.workoutMinutes > 0 &&
            typeof a.goalAchieved === "boolean"
    );

    return (
        <div>
            {validActivities.map((a) => (
                <div key={a.activityId} data-testid="activity-item">
                    <h3>{a.name || "Unknown"}</h3>
                    <p>{a.date || "No Date"}</p>
                    <p>Steps: {a.steps}</p>
                </div>
            ))}
        </div>
    );
}