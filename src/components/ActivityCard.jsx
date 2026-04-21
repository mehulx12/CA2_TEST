export default function ActivityCard({ activity }) {
    return (
        <div data-testid="activity-item">
            <h3>{activity.name || "Unknown"}</h3>
            <p>{activity.date || "No Date"}</p>
            <p>Steps: {activity.steps}</p>
        </div>
    );
}