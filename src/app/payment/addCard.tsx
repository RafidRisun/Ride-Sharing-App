import { iconBackOfCard, iconCardVisa } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SvgXml } from 'react-native-svg';

export default function AddCard() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [isChecked, setChecked] = useState(false);
	const [items, setItems] = useState([
		{ label: 'USA', value: 'usa' },
		{ label: 'Canada', value: 'canada' },
		{ label: 'UK', value: 'uk' },
		{ label: 'Australia', value: 'australia' },
		{ label: 'Germany', value: 'germany' },
		{ label: 'France', value: 'france' },
		{ label: 'Italy', value: 'italy' },
	]);

	return (
		<View style={tw`flex-1 items-center justify-between bg-white p-5 gap-5`}>
			<View style={tw`flex flex-col w-full items-start gap-4`}>
				<Text style={tw`text-lg w-full font-sfprobold`}>Add card</Text>
				<Text style={tw`text-sm w-full font-sfpro`}>Card information</Text>
				<View style={tw`flex flex-col w-full`}>
					<View
						style={tw`flex flex-row items-center justify-between border border-b-0 border-gray-700 rounded-t-lg h-14 p-2`}
					>
						<TextInput
							onChange={() => {}}
							placeholder="Card information"
							style={tw`flex-1`}
						/>
						<View style={tw`flex flex-row gap-2 items-center justify-center`}>
							<SvgXml xml={iconCardVisa} />
						</View>
					</View>
					<View
						style={tw`flex flex-row items-center justify-between border border-gray-700 rounded-b-lg h-14`}
					>
						<View
							style={tw`flex flex-row flex-1 p-2 items-center justify-start h-full border-r border-gray-700`}
						>
							<TextInput
								onChange={() => {}}
								placeholder="MM/YY"
								style={tw`flex-1`}
							/>
						</View>
						<View
							style={tw`flex flex-row flex-1 p-2 items-center justify-between h-full`}
						>
							<TextInput
								onChange={() => {}}
								placeholder="CVC"
								style={tw`flex-1`}
							/>
							<SvgXml xml={iconBackOfCard} />
						</View>
					</View>
				</View>

				<Text style={tw`text-sm font-sfpro w-full`}>Billing Address</Text>
				<View style={tw`flex flex-col w-full`}>
					<View
						style={tw`flex flex-row items-center justify-between border border-b-0 border-gray-700 rounded-t-lg h-14 p-2`}
					>
						<DropDownPicker
							open={open}
							value={value}
							items={items}
							setOpen={setOpen}
							setValue={setValue}
							setItems={setItems}
							placeholder="Select Country"
							style={{ backgroundColor: 'transparent', borderWidth: 0 }}
						/>
					</View>
					<View
						style={tw`flex flex-row items-center justify-between border border-gray-700 rounded-b-lg h-14 p-2`}
					>
						<TextInput
							onChange={() => {}}
							placeholder="ZIP"
							style={tw`flex-1`}
						/>
					</View>
					<View
						style={tw`w-full flex flex-row p-2 justify-start items-center gap-2`}
					>
						<Checkbox
							style={tw`w-5 h-5 rounded-sm`}
							value={isChecked}
							onValueChange={setChecked}
							color={isChecked ? '#17A14C' : undefined}
						/>
						<Text style={tw`text-sm font-sfpro`}>
							Save this card for future payment
						</Text>
					</View>
				</View>
			</View>
			<TouchableOpacity
				style={tw`flex w-full p-3 bg-green rounded-sm items-center`}
			>
				<Text style={tw`text-sm font-sfprobold text-white`}>Save</Text>
			</TouchableOpacity>
		</View>
	);
}
