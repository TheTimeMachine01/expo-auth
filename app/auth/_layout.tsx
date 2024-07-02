import { Stack } from "expo-router"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SignOut from "./SignOut"

type Props = {}

interface AuthStackScreenProps {
    name: string; // Unique name for the screen
    component: React.FC; // Function component representing the screen
  }

const AuthStack: React.FC = () => {
    const screens: AuthStackScreenProps[] = [
        { name: 'SignIn', component: SignIn },
        { name: 'SignUp', component: SignUp },
        { name: 'SignOut', component: SignOut },
    ]
  return (
    <Stack>
        {screens.map((screen) => (
            <Stack.Screen key={screen.name} name={screen.name} options={{ headerShown: false }} />
            ))}
    </Stack>
  )
}

export default AuthStack