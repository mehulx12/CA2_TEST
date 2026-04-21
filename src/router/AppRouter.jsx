import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Activities from "../pages/Activities";
import ActivityDetail from "../pages/ActivityDetail";
import Filter from "../pages/Filter";
import Stats from "../pages/Stats";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <nav style={{ padding: "15px", background: "#f0f0f0", marginBottom: "20px", display: "flex", gap: "20px", borderBottom: "2px solid #ccc" }}>
                <Link to="/" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Dashboard</Link>
                <Link to="/activities" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Activities</Link>
                <Link to="/filter" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Filter</Link>
                <Link to="/stats" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Stats</Link>
            </nav>
            <Routes>
                {/* 🔥 DEFAULT ROUTE */}
                <Route path="/" element={<Dashboard />} />

                <Route path="/activities" element={<Activities />} />
                <Route path="/activities/:id" element={<ActivityDetail />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </BrowserRouter>
    );
}