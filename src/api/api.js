const BASE_URL = "https://t4e-testserver.onrender.com/api";

export const getToken = async (studentId, password, set) => {
    const res = await fetch(`${BASE_URL}/public/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, password, set }),
    });
    const data = await res.json();
    return data;
};

export const getDataset = async (token, dataUrl) => {
    const res = await fetch(`${BASE_URL}${dataUrl}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data.data;
};