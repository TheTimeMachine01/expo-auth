import { ThunkAction } from "redux-thunk";

const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");
const { createSlice } = require("@reduxjs/toolkit");

type JwtToken = string; // Type for JWT token

const loadTokenFromStorage = async (): Promise<JwtToken | null> => {
    try {
        const token = await AsyncStorage.getItem("jwtToken");
        return token ? token : null;
    } catch (error) {
        console.error("Error loading token from storage:", error);
        return null;
    }
};

// Initial State (typed)
const initialState: { token: JwtToken | null } = {
    token: null,
};

// Slice (typed reducers and actions)
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAction: (state: { token: string | null; }, action: { payload: JwtToken }) => {
            state.token = action.payload;
            AsyncStorage.setItem("jwtToken", action.payload);
        },
        logoutAction: (state: { token: null; loading: boolean }) => {
            state.token = null;
            AsyncStorage.removeItem("jwtToken");
        },
        setToken: (state: { token: string; loading: boolean }, action: { payload: JwtToken }) => {
            state.token = action.payload;
            AsyncStorage.setItem("jwtToken", action.payload);
        },
    },
});

// Generating the Actions (typed)
export const { loginAction, logoutAction, setToken } = authSlice.actions;

// Generating the Reducer
export const authReducer = authSlice.reducer;

// Load Token (async thunk)
export const loadToken = (): ThunkAction<void, any, unknown, typeof loginAction> => async (dispatch: (arg0: any) => void) => {
    const token = await loadTokenFromStorage();
    if (token) {
        dispatch(loginAction(token));
    }
};

