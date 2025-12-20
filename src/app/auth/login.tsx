import AuthWrapper from '@/src/components/ui/authWrapper';
import tw from '@/src/lib/tailwind';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
	const router = useRouter();
	return (
		<AuthWrapper>
			<Text style={tw`text-3xl text-green font-sfpromedium`}>Welcome Back</Text>
			<View style={tw`flex flex-col gap-5 w-full items-center`}>
				<View style={tw`flex flex-col  w-full items-start`}>
					<Text style={tw`text-base font-sfpro`}>Email</Text>
					<TextInput
						style={tw`w-full border border-gray-500 rounded-lg px-3 py-2 mt-1`}
					/>
				</View>
				<View style={tw`flex flex-col  w-full items-start`}>
					<Text style={tw`text-base font-sfpro`}>Password</Text>
					<TextInput
						style={tw`w-full border border-gray-500 rounded-lg px-3 py-2 mt-1`}
					/>
					<View style={tw`w-full flex flex-row justify-end items-center`}>
						<Link
							style={tw`text-sm text-green font-sfpro mt-1`}
							href={'/auth/reset-password'}
						>
							Forgot Password?
						</Link>
					</View>
				</View>
				<TouchableOpacity
					style={tw`flex items-center justify-center py-3 bg-green rounded-xl w-full`}
					onPress={() => {
						router.push('/(tabs)/home');
					}}
				>
					<Text style={tw`text-white font-sfpromedium`}>Log In</Text>
				</TouchableOpacity>
				<View
					style={tw`w-full flex flex-row justify-center items-center gap-2`}
				>
					<Text style={tw`text-sm font-sfpro`}>Dont have an account?</Text>
					<Link
						style={tw`text-sm text-green font-sfpromedium`}
						href={'/auth/create-account'}
					>
						Register
					</Link>
				</View>
			</View>
		</AuthWrapper>
	);
}
