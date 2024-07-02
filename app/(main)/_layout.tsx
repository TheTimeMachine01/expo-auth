import React from 'react'
import { Tabs } from 'expo-router'
import profile from './profile'
import ProtectedRoutes from '../../components/ProtectedRoutes';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

interface HomeStackScreenProps {
  name: string; // Unique name for the screen
  component: React.FC<{}>; // Function component representing the screen
  options?: object;
}


const Page: React.FC = () => {

  return (
    <ProtectedRoutes>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors.orange.default,
          tabBarStyle: {
            height: 70,
            borderWidth: 0,
            borderRadius: 25,
            marginBottom: 20,
            marginHorizontal: 10,
            paddingBottom: 10,
            // borderColor: Colors.orange.default,
            // borderTopColor: Colors.orange.default,
            // backgroundColor: "grey",
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            // marginBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          key={'index'}
          name={'index'}
          options={{
            href: null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? 'home': 'home-outline'} color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => <FontAwesome5 name={focused ? 'user-alt' : 'user'} size={24} color={color} />,
            headerShown: false,
          }}
        />
      </Tabs>
    </ProtectedRoutes>
  )
}


export default Page