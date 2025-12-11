import AuthWrapper from '@/src/components/ui/authWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function Verification() {
	const router = useRouter();

	return (
		<AuthWrapper>
			<View style={tw`flex flex-col gap-2 w-full items-center`}>
				<Text style={tw`text-2xl font-sfpromedium text-green`}>
					Verification Code
				</Text>
				<Text style={tw`text-sm font-sfpro text-center`}>
					We sent a reset link to contact@dscode.com enter 6 digit code that is
					mentioned in the email
				</Text>
			</View>
			<View style={tw`flex flex-col gap-5 w-full items-center`}>
				<View
					style={tw`flex flex-row items-center justify-between px-3 gap-2 w-full`}
				>
					<OtpInput
						numberOfDigits={4}
						onTextChange={text => console.log(text)}
					/>
				</View>
				<TouchableOpacity
					style={tw`flex items-center justify-center py-3 bg-green rounded-xl w-full`}
					onPress={() => {
						router.push('/auth/create-new-pass');
					}}
				>
					<Text style={tw`text-white font-sfpromedium`}>Enter</Text>
				</TouchableOpacity>
			</View>
		</AuthWrapper>
	);
}
