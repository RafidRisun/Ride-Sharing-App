import AuthWrapper from '@/src/components/ui/authWrapper';
import tw from '@/src/lib/tailwind';
import { Checkbox } from 'expo-checkbox';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreateAccount() {
	const router = useRouter();
	const [isChecked, setChecked] = useState(false);
	return (
		<AuthWrapper>
			<Text style={tw`text-2xl font-sfpromedium text-green`}>
				Create Account
			</Text>
			<View style={tw`flex flex-col gap-5 w-full items-center`}>
				<View style={tw`flex flex-col  w-full items-start`}>
					<Text style={tw`text-base font-sfpro`}>Full Name</Text>
					<TextInput
						style={tw`w-full border border-gray-500 rounded-lg px-3 py-2 mt-1`}
					/>
				</View>
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
				</View>
				<View style={tw`flex flex-col  w-full items-start`}>
					<Text style={tw`text-base font-sfpro`}>Confirm Password</Text>
					<TextInput
						style={tw`w-full border border-gray-500 rounded-lg px-3 py-2 mt-1`}
					/>
				</View>
				<View style={tw`w-full flex flex-row justify-start items-center gap-2`}>
					<Checkbox
						style={tw``}
						value={isChecked}
						onValueChange={setChecked}
						color={isChecked ? 'green' : undefined}
					/>
					<Text style={tw`text-sm font-sfpro`}>
						I agree to the Terms and Conditions
					</Text>
				</View>
				<TouchableOpacity
					style={tw`flex items-center justify-center py-3 bg-green rounded-xl w-full`}
				>
					<Text style={tw`text-white font-sfpromedium`}>Register</Text>
				</TouchableOpacity>
				<View
					style={tw`w-full flex flex-row justify-center items-center gap-2`}
				>
					<Text style={tw`text-sm font-sfpro`}>Already have an account?</Text>
					<TouchableOpacity
						style={tw`items-center justify-center`}
						onPress={() => {
							router.push('/auth/login');
						}}
					>
						<Text style={tw`text-sm text-green font-sfpromedium`}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</AuthWrapper>
	);
}
