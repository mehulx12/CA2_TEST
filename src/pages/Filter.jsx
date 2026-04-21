import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Filter() {
    const { activities } = useApp();
    const [input, setInput] = useState("");

    const filtered = activities.filter((a) =>
        a.name?.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div>
            <input
                data-testid="filter-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {filtered.map((a) => (
                <div key={a.activityId} data-testid="activity-item">
                    {a.name || "Unknown"}
                </div>
            ))}
        </div>
    );
}