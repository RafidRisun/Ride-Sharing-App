import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#28A745',
				tabBarLabelStyle: { fontFamily: 'sfprobold', fontSize: 12 },
				tabBarStyle: { borderTopWidth: 2 },
				animation: 'shift',
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<FontAwesome6
							name="house"
							color={color}
							iconStyle="solid"
							size={22}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="rides"
				options={{
					title: 'Rides',
					tabBarIcon: ({ color }) => (
						<FontAwesome6
							name="car"
							color={color}
							iconStyle="solid"
							size={22}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="notifications"
				options={{
					title: 'Notifications',
					tabBarIcon: ({ color }) => (
						<FontAwesome6
							name="bell"
							color={color}
							iconStyle="solid"
							size={22}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => (
						<FontAwesome6
							name="user"
							color={color}
							iconStyle="solid"
							size={22}
						/>
					),
					headerShown: false,
				}}
			/>
		</Tabs>
	);
}
