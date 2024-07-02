import * as React from 'react';
import { useRouter, useSegments } from 'expo-router';

const AuthContext = React.createContext<any>(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const rootSegment = useSegments()[0];
  const router = useRouter();
  const [user, setUser] = React.useState<string | undefined>('');

  React.useEffect(() => {
    if (user === undefined) return;

    console.log("I am useEffcet")

    if (!user && rootSegment !== 'auth') {
      // router.push('/auth/SignIn');
      console.log("I am main");
    } else if (user && rootSegment !== 'main') {
      router.push('/main/Home/Home');
      console.log("I am auth");

    }
  }, [user, rootSegment]);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        signIn: () => {
          setUser('Beto');
          // router.replace('/main/Home');
        },
        signOut: () => {
          setUser('');
          // router.replace('/auth/SignIn');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
