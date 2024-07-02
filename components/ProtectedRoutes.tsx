import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";


const ProtectedRoutes = ({ children }: React.PropsWithChildren) => {
    const router = useRouter();
    

    // const [user, setUser] = useState<string | undefined>("Ashish");
    const token = useSelector((state: any | null) => state.auth.token)
    // const [isLoading, setIsLoading] = useState<boolean>(false);

    // const { user, isLoading }

    useEffect(() => {
        if (!token || token == null) {
            router.push("/launch");
        }
    }, [token, router]);

    // if (loading) {
    //     return (
    //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //         <ActivityIndicator size="large" />
    //       </View>
    //     );
    //   }

    if (!token) return null;
    return children;
};

export default ProtectedRoutes;