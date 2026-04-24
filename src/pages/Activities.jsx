import { useApp } from "../context/AppContext";

function ActivityItem({ activity }) {
    const { toggleGoal } = useApp();
    return (
        <div data-testid="activity-item" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{activity.name || "Unknown"}</h3>
            <p>{activity.date || "No Date"}</p>
            <p>Steps: {activity.steps}</p>
            <p>Goal Achieved: {activity.goalAchieved ? "Yes" : "No"}</p>
            <button onClick={() => toggleGoal(activity.activityId)}>Toggle Goal</button>
        </div>
    );
}

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
                <ActivityItem key={a.activityId} activity={a} />
            ))}
        </div>
    );
}