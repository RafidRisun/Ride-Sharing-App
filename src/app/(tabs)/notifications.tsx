import { iconTrash } from '@/assets/icons';
import HeaderWithTitle from '@/src/components/HeaderWithTitle';
import tw from '@/src/lib/tailwind';
import React from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
	SharedValue,
	useAnimatedStyle,
} from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
	const styleAnimation = useAnimatedStyle(() => {
		console.log('showRightProgress:', prog.value);
		console.log('appliedTranslation:', drag.value);

		return {
			transform: [{ translateX: drag.value + 70 }],
		};
	});

	return (
		<Reanimated.View style={styleAnimation}>
			<TouchableOpacity style={styles.rightAction}>
				<SvgXml xml={iconTrash} />
			</TouchableOpacity>
		</Reanimated.View>
	);
}

export default function Notifications() {
	return (
		<View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
			<HeaderWithTitle title="Notifications" />
			<GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
				<FlatList
					data={notifications}
					keyExtractor={item => item.id}
					style={tw`flex-1 w-full`}
					contentContainerStyle={tw`p-4 gap-4`}
					renderItem={({ item }) => (
						<ReanimatedSwipeable
							containerStyle={tw`flex flex-col pl-8 py-3 bg-white shadow-md rounded-sm`}
							friction={2}
							rightThreshold={10}
							renderRightActions={RightAction}
						>
							{item.read ? null : (
								<View
									style={tw`absolute left-[-5] top-1 w-3 h-3 bg-red-600 rounded-full`}
								/>
							)}
							<Text style={tw`text-base font-semibold`}>{item.title}</Text>
							<Text style={tw`text-gray-600 mt-1`}>{item.message}</Text>
							<Text style={tw`text-gray-400 text-xs mt-2`}>{item.timeAgo}</Text>
						</ReanimatedSwipeable>
					)}
				/>
			</GestureHandlerRootView>
		</View>
	);
}

const styles = StyleSheet.create({
	rightAction: {
		width: 70,
		height: '100%',
		backgroundColor: '#E9E9E9',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const notifications = [
	{
		id: '1',
		title: 'Ride Completed',
		message: 'Your ride with Dr. Gyatt has been completed successfully.',
		timeAgo: '2 hours ago',
		read: false,
	},
	{
		id: '2',
		title: 'New Promotion',
		message: 'Get 20% off on your next ride! Use code RIDE20.',
		timeAgo: '1 day ago',
		read: true,
	},
	{
		id: '3',
		title: 'Driver Rating',
		message: 'You rated Dr. Gyatt 5 stars. Thank you for your feedback!',
		timeAgo: '3 days ago',
		read: true,
	},
];
