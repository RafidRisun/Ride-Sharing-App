import AuthWrapper from '@/src/components/ui/authWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreateNewPass() {
	const router = useRouter();
	return (
		<AuthWrapper>
			<Text style={tw`text-2xl font-sfpromedium text-green`}>
				Create New Password
			</Text>
			<View style={tw`flex flex-col gap-5 w-full items-center`}>
				<View style={tw`flex flex-col  w-full items-start`}>
					<Text style={tw`text-base font-sfpro`}>New Password</Text>
					<TextInput
						style={tw`w-full border border-gray-500 rounded-lg px-3 py-2 mt-1`}
					/>
				</View>
				<View style={tw`flex flex-col  w-full items-start`}>
					<Text style={tw`text-base font-sfpro`}>Confirm Password</Text>
					<TextInput
						style={tw`w-full border border-gray-500 rounded-lg px-3 py-2 mt-1`}
					/>
				</View>
				<TouchableOpacity
					style={tw`flex items-center justify-center py-3 bg-green rounded-xl w-full`}
					onPress={() => {
						router.push('/auth/login');
					}}
				>
					<Text style={tw`text-white font-sfpromedium`}>Update Password</Text>
				</TouchableOpacity>
			</View>
		</AuthWrapper>
	);
}
