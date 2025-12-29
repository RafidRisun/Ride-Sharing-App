import HeaderWithTitle from '@/src/components/HeaderWithTitle';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function Profile() {
	const router = useRouter();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'flex-start',
				alignItems: 'center',
				backgroundColor: '#F8F6F6',
			}}
		>
			<HeaderWithTitle title="Profile" />
			<Text onPress={() => router.push('/(tabs)/profile/personalInformation')}>
				Profile
			</Text>
		</View>
	);
}
