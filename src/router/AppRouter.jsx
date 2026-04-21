import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Activities from "../pages/Activities";
import ActivityDetail from "../pages/ActivityDetail";
import Filter from "../pages/Filter";
import Stats from "../pages/Stats";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 🔥 DEFAULT ROUTE */}
                <Route path="/" element={<Navigate to="/activities" />} />

                <Route path="/activities" element={<Activities />} />
                <Route path="/activities/:id" element={<ActivityDetail />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </BrowserRouter>
    );
}