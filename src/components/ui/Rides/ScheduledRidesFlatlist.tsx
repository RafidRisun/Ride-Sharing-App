import {
	iconCall,
	iconDestination,
	iconDots,
	iconPickup,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ScheduledRidesFlatlist({ data }: { data: any[] }) {
	const router = useRouter();
	return (
		<>
			{data.length === 0 && (
				<View style={tw`flex-1 items-center justify-center`}>
					<Image
						source={require('@/assets/images/noScheduledData.png')}
						style={tw`w-60 h-60`}
						contentFit="contain"
					/>
					<Text style={tw`text-lg font-sfprobold mt-4`}>
						No Scheduled Rides
					</Text>
					<Text style={tw`text-center text-gray-600 mt-2`}>
						You have no scheduled rides at the moment.
					</Text>
					<TouchableOpacity style={tw`mt-6 bg-green px-6 py-3 rounded-md`}>
						<Text style={tw`text-white font-sfprobold`}>Schedule a Ride</Text>
					</TouchableOpacity>
				</View>
			)}
			{data.length > 0 && (
				<FlatList
					data={data}
					keyExtractor={item => item.id}
					style={tw`flex-1 w-full px-4 py-1`}
					contentContainerStyle={tw`gap-4`}
					renderItem={({ item }) => (
						<View
							style={tw`flex flex-col gap-2 p-3 bg-white shadow-md rounded-sm`}
						>
							<View style={tw`flex w-full flex-col gap-2`}>
								<View
									style={tw`flex flex-row items-center rounded-sm px-3 py-2 gap-3 w-full`}
								>
									<SvgXml xml={iconPickup} width={20} height={20} />
									<Text>Pick-up location</Text>
								</View>
								<View
									style={tw`flex flex-row items-center rounded-sm px-3 py-2 gap-3 w-full`}
								>
									<SvgXml xml={iconDestination} width={22} height={22} />
									<Text>Destination</Text>
								</View>
								<View
									style={tw`h-5 border-l-2 border-black absolute left-5.5 top-7.5`}
								/>
								<View
									style={tw`flex flex-col gap-1 absolute top-0 right-0 items-end`}
								>
									<Text style={tw`text-sm font-sfprobold`}>Aug 23</Text>
									<Text style={tw`text-sm font-sfpro text-gray-700`}>
										2:32 PM
									</Text>
								</View>
							</View>
							<View
								style={tw`flex flex-row items-center justify-between w-full mb-2`}
							>
								<View style={tw`flex flex-row items-center gap-4`}>
									<View style={tw`pb-2`}>
										<Image
											source={item.driverImage}
											style={tw`w-15 h-15 rounded-full border-4 border-white shadow-md`}
											contentFit="cover"
										/>
										<Text
											style={tw`text-black text-xs flex px-2 py-1 bg-white rounded-full absolute bottom-[-1] left-1/2 transform -translate-x-1/2 shadow-md`}
										>
											⭐ {item.rating}
										</Text>
									</View>
									<View style={tw`flex flex-col gap-2`}>
										<Text style={tw`font-sfprobold text-sm`}>
											{item.driverName}
										</Text>
										<Text style={tw`text-gray-600 text-xs`}>
											{item.vehicle} | {item.vehicleColor}
										</Text>
									</View>
								</View>
								<View style={tw`flex flex-row items-center gap-2`}>
									<TouchableOpacity
										style={tw`w-10 h-10 items-center justify-center bg-white shadow-md rounded-md`}
									>
										<SvgXml xml={iconCall} width={20} height={20} />
									</TouchableOpacity>
									<TouchableOpacity
										style={tw`w-10 h-10 items-center justify-center bg-white shadow-md rounded-md`}
									>
										<SvgXml xml={iconDots} width={20} height={20} />
									</TouchableOpacity>
								</View>
							</View>
							<View style={tw`flex flex-row gap-2`}>
								<TextInput
									style={tw`flex-1 bg-gray-200 rounded-md p-3`}
									placeholder="Type a message"
								/>
								{/* </KeyboardAvoidingView> */}
								<TouchableOpacity
									style={tw`bg-green rounded-md p-3 justify-center`}
									onPress={() => router.push('/(tabs)/home/chat')}
								>
									<Text style={tw`text-white`}>Send</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
				/>
			)}
		</>
	);
}
