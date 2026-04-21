import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function ActivityDetail() {
    const { id } = useParams();
    const { activities } = useApp();

    // ✅ FIXED MATCHING
    const activity = activities.find(
        (a) => String(a.activityId) === String(id)
    );

    if (!activity) return <h2>Invalid ID</h2>;

    const efficiency =
        activity.workoutMinutes > 0
            ? activity.caloriesBurned / activity.workoutMinutes
            : 0;

    return (
        <div>
            <h2>{activity.name || "Unknown"}</h2>
            <p>{activity.date || "No Date"}</p>
            <p>Steps: {activity.steps}</p>
            <p>Efficiency: {efficiency}</p>
        </div>
    );
}