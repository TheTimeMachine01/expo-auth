import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

interface User {
    usename: string;
}

const ProtectedRoutes = ({ children }: React.PropsWithChildren) => {
    const router = useRouter();

    const [user, setUser] = useState<string | undefined>("Ashish");
    // const [isLoading, setIsLoading] = useState<boolean>(false);

    // const { user, isLoading }

    useEffect(() => {
        if (!user) {
            router.push("/auth");
        }
    }, [user]);

    // if (isLoading) {
    //     return <ActivityIndicator <unknown>/>/;
    // }

    if (!user) return null;
    return children;
};

export default ProtectedRoutes;