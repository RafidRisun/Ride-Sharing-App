import { iconBack } from '@/assets/icons';
import ChooseButton from '@/src/components/ui/chooseButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../../../lib/tailwind';

export default function Receipt() {
	const router = useRouter();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'flex-start',
				alignItems: 'center',
				backgroundColor: 'white',
				paddingTop: 50,
			}}
		>
			<TouchableOpacity
				style={tw`absolute left-4 top-10 z-10`}
				onPress={() => {
					router.back();
				}}
			>
				<SvgXml xml={iconBack} width={34} height={34} />
			</TouchableOpacity>
			<Text style={tw`font-sfprobold text-lg`}>Receipt</Text>
			<View style={tw`mt-4 flex-1 flex flex-col gap-4 w-full p-12`}>
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>Driver</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>Dr. Gyatt</Text>
				</View>
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>
						Car Number
					</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>GR 678-uvwx</Text>
				</View>
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>Car Model</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>Toyota Camry</Text>
				</View>
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>Car Color</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>Black</Text>
				</View>
				<View style={tw`border-t border-gray-300 my-4`} />
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>
						Cost Per Mile
					</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>$1.25</Text>
				</View>
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>
						Estimated Mile
					</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>10</Text>
				</View>
				<View style={tw`border-t border-gray-300 my-4`} />
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>Total</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>$12.50</Text>
				</View>
				<View style={tw`border-t border-gray-300 my-4`} />
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>Name</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>Dr. Goon</Text>
				</View>
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>
						Phone Number
					</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>
						+1 234 567 8901
					</Text>
				</View>
				<View style={tw`flex flex-row justify-between`}>
					<Text style={tw`font-sfprobold text-gray-500 flex-1`}>
						Transaction ID
					</Text>
					<Text style={tw`font-sfprobold flex-1 text-right`}>676767676767</Text>
				</View>
			</View>
			<View style={tw`w-full px-4 pb-8`}>
				<ChooseButton text="Download Receipt" onPress={() => {}} />
			</View>
		</View>
	);
}
