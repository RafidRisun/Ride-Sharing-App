import tw from '@/src/lib/tailwind';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [isChecked, setChecked] = useState(false);
	const [items, setItems] = useState([
		{ label: 'Home', value: 'home' },
		{ label: 'Office', value: 'office' },
		{ label: 'AIUB', value: 'aiub' },
	]);

	return (
		<View
			style={tw`flex flex-col w-full items-center justify-end p-3 bg-green rounded-b-xl absolute top-0 z-20`}
		>
			<View style={tw`flex flex-row w-full items-center justify-between p-3`}>
				<Image
					source={require('../../../assets/images/parrot.png')}
					style={tw`w-12 h-12 rounded-full border-4 border-white`}
					contentFit="cover"
				/>
				<View
					style={tw`flex h-8 bg-white items-center justify-center rounded-full`}
				>
					<DropDownPicker
						open={open}
						value={value}
						items={items}
						setOpen={setOpen}
						setValue={setValue}
						setItems={setItems}
						placeholder="Current Location"
						placeholderStyle={tw`font-sfpro text-xs text-black`}
						style={{
							borderColor: 'transparent',
							backgroundColor: 'transparent',
							width: 200,
						}}
					/>
				</View>
				<TouchableOpacity>
					<FontAwesome6 name="bell" color="white" iconStyle="solid" size={22} />
				</TouchableOpacity>
			</View>
			<View style={tw`w-full flex flex-row items-center justify-between px-3`}>
				<View style={tw`flex flex-col`}>
					<Text style={tw`font-sfpromedium text-lg text-white`}>Where to?</Text>
					<Text style={tw`text-white font-sfpro text-sm`}>
						Get a ride in seconds
					</Text>
				</View>
				<View
					style={tw`flex flex-row justify-center items-center py-1 px-2 bg-[#FFCC00] rounded-full`}
				>
					<Text style={tw`font-sfpromedium text-xs`}>10%</Text>
					<Text style={tw`font-sfpromedium text-xs`}> off today</Text>
				</View>
			</View>
		</View>
	);
}
