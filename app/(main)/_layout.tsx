import React from 'react'
import { Tabs } from 'expo-router'
import profile from './profile'
import ProtectedRoutes from '../../components/ProtectedRoutes';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import index from './index';
import home from './home';
import { useFonts } from 'expo-font';

interface HomeStackScreenProps {
  name: string; // Unique name for the screen
  component: React.FC<{}>; // Function component representing the screen
  options?: object;
}


const Page: React.FC = () => {

  const [loaded] = useFonts({
    ...FontAwesome.font,
  })

  if(!loaded) {
    console.log("Fonts not loaded");
  } else {
    console.log("Fonts are loaded");
  }

  return (
    <ProtectedRoutes>
      <Tabs>
        {/* <Tabs.Screen
          key={'home'}
          name={'home'}
          // component={{ profile }}
          options={{
            title: 'Home',
            href: '/home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color='black' />
          }}
        /> */}
        {/* <Tabs.Screen
          key={'profile'}
          name={'profile'}
          // component={{ profile }}
          options={{
            title: 'Profile',
            href: '/profile',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color="#000" />
          }}
        /> */}
        {/* <Tabs.Screen
          key={'index'}
          name={'index'}
          // component={{ index }}
          options={{
            href: null,
          }}
        /> */}
         <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'setting',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      </Tabs>
    </ProtectedRoutes>
  )
}

export default Page