import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Filter() {
    const { activities } = useApp();
    const [input, setInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    let content;

    if (input.trim() === "") {
        content = <p style={{color: 'red'}}>Error: Input cannot be empty.</p>;
    } else if (isNaN(Number(input))) {
        content = <p style={{color: 'orange'}}>Message: Invalid input. Please enter a number.</p>;
    } else {
        const threshold = Number(input);
        const validActivities = activities.filter(
            (a) =>
                a.steps > 0 &&
                a.caloriesBurned > 0 &&
                a.workoutMinutes > 0 &&
                typeof a.goalAchieved === "boolean"
        );

        const filtered = validActivities.filter((a) => {
            const meetsSteps = a.steps >= threshold;
            const meetsName = nameInput ? a.name?.toLowerCase().includes(nameInput.toLowerCase()) : true;
            return meetsSteps && meetsName;
        });

        content = filtered.map((a) => (
            <div key={a.activityId} data-testid="activity-item" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                <h3>{a.name || "Unknown"}</h3>
                <p>{a.date || "No Date"}</p>
                <p>Steps: {a.steps}</p>
            </div>
        ));
    }

    return (
        <div>
            <h2>Filter Activities</h2>
            <input
                data-testid="filter-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter minimum steps..."
            />
            <input
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Search by name (optional)..."
                style={{ marginLeft: "10px" }}
            />
            <div style={{ marginTop: "20px" }}>
                {content}
            </div>
        </div>
    );
}