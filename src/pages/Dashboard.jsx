import { useApp } from "../context/AppContext";

export default function Dashboard() {
    const { activities, loading } = useApp();

    if (loading || !activities) return <h2>Loading Dashboard...</h2>;

    return (
        <div>
            <h2>Dashboard - All Fetched Data</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
                {activities.map((a) => (
                    <div 
                        key={a.activityId} 
                        data-testid="activity-item" 
                        style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", minWidth: "200px", background: "#fff" }}
                    >
                        <h3>{a.name || "Unknown"}</h3>
                        <p><strong>Date:</strong> {a.date || "No Date"}</p>
                        <p><strong>Steps:</strong> {a.steps}</p>
                        <p><strong>Calories:</strong> {a.caloriesBurned}</p>
                        <p><strong>Minutes:</strong> {a.workoutMinutes}</p>
                        <p><strong>Goal:</strong> {a.goalAchieved ? "✅ Achieved" : "❌ Missed"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
