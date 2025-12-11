import AuthWrapper from '@/src/components/ui/authWrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Link, router } from 'expo-router';

export default function ResetPassword() {
	return (
		<AuthWrapper>
			<Text style={tw`text-2xl font-sfpromedium text-green`}>
				Reset Your Password
			</Text>
			<View style={tw`flex flex-col gap-5 w-full items-center`}>
				<View style={tw`flex flex-col  w-full items-start`}>
					<Text style={tw`text-base font-sfpro`}>Email</Text>
					<TextInput
						style={tw`w-full border border-gray-500 rounded-lg px-3 py-2 mt-1`}
					/>
					<View style={tw`w-full flex flex-row justify-end items-center`}>
						<Link
							style={tw`text-sm font-sfpro text-green mt-1`}
							href={'/auth/reset-password'} // Update the href to the correct path
						>
							Resend
						</Link>
					</View>
				</View>
				<TouchableOpacity
					style={tw`flex items-center justify-center py-3 bg-green rounded-xl w-full`}
					onPress={() => {
						router.push('/auth/verification');
					}}
				>
					<Text style={tw`text-white font-sfpromedium`}>Enter</Text>
				</TouchableOpacity>
			</View>
		</AuthWrapper>
	);
}
