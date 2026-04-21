import { createContext, useContext, useReducer, useEffect } from "react";
import { AppReducer } from "../reducer/AppReducer";
import { getToken, getDataset } from "../api/api";

const initialState = {
    activities: [],
    loading: true,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tokenRes = await getToken(
                    "E0223014",
                    "541898",
                    "setB"
                );

                const data = await getDataset(tokenRes.token, tokenRes.dataUrl);

                dispatch({ type: "SET_DATA", payload: data });

            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                activities: state.activities,
                loading: state.loading,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);