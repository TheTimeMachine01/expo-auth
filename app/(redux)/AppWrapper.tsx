import { Stack } from "expo-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadToken } from './authSlice'
import { AppDispatch } from "./store";

const AppWrapper = () => {

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(loadToken())
    }, [dispatch]);

    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerShown: false,
                    // headerTitle: 'Index',
                }}
            />
            <Stack.Screen
                name='auth'
                options={{
                    headerShown: false,
                    // headerTitle: 'Index',
                }}
            />
            <Stack.Screen
                name='(main)'
                options={{
                    headerShown: false,
                    // headerTitle: 'Index',
                }}
            />
            <Stack.Screen
                name='launch'
                options={{
                    headerShown: false,
                    // headerTitle: 'Index',
                }}
            />
        </Stack>
    )
}

export default AppWrapper