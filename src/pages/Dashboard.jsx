import { useState } from "react";
import { useApp } from "../context/AppContext";

function ActivityCard({ activity }) {
    const { updateActivity } = useApp();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(activity);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : 
                    type === 'number' ? Number(value) : value
        }));
    };

    const handleSave = () => {
        updateActivity(formData);
        setIsEditing(false);
    };

    return (
        <div 
            data-testid="activity-item" 
            style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", minWidth: "220px", background: "#fff", position: "relative" }}
        >
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <button onClick={() => setIsEditing(!isEditing)} style={{ cursor: "pointer" }}>
                    {isEditing ? "Cancel" : "Edit"}
                </button>
            </div>
            
            {isEditing ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "20px" }}>
                    <label><strong>Name:</strong> <input name="name" value={formData.name || ""} onChange={handleChange} /></label>
                    <label><strong>Date:</strong> <input type="date" name="date" value={formData.date || ""} onChange={handleChange} /></label>
                    <label><strong>Steps:</strong> <input type="number" name="steps" value={formData.steps || 0} onChange={handleChange} /></label>
                    <label><strong>Calories:</strong> <input type="number" name="caloriesBurned" value={formData.caloriesBurned || 0} onChange={handleChange} /></label>
                    <label><strong>Minutes:</strong> <input type="number" name="workoutMinutes" value={formData.workoutMinutes || 0} onChange={handleChange} /></label>
                    <label><strong>Goal Achieved:</strong> <input type="checkbox" name="goalAchieved" checked={formData.goalAchieved || false} onChange={handleChange} /></label>
                    <button onClick={handleSave} style={{ marginTop: "10px", padding: "5px", cursor: "pointer", background: "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}>Save</button>
                </div>
            ) : (
                <div style={{ marginTop: "10px" }}>
                    <h3 style={{ marginTop: "0" }}>{activity.name || "Unknown"}</h3>
                    <p style={{ margin: "5px 0" }}><strong>Date:</strong> {activity.date || "No Date"}</p>
                    <p style={{ margin: "5px 0" }}><strong>Steps:</strong> {activity.steps}</p>
                    <p style={{ margin: "5px 0" }}><strong>Calories:</strong> {activity.caloriesBurned}</p>
                    <p style={{ margin: "5px 0" }}><strong>Minutes:</strong> {activity.workoutMinutes}</p>
                    <p style={{ margin: "5px 0" }}><strong>Goal:</strong> {activity.goalAchieved ? "✅ Achieved" : "❌ Missed"}</p>
                </div>
            )}
        </div>
    );
}

export default function Dashboard() {
    const { activities, loading } = useApp();

    if (loading || !activities) return <h2>Loading Dashboard...</h2>;

    return (
        <div>
            <h2>Dashboard - All Fetched Data</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
                {activities.map((a) => (
                    <ActivityCard key={a.activityId} activity={a} />
                ))}
            </div>
        </div>
    );
}
