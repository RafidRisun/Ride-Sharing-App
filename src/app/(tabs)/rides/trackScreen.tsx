import { iconBack } from '@/assets/icons';
import BackButton from '@/src/components/BackButton';
import ChooseButton from '@/src/components/ui/chooseButton';
import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useCallback, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';

export default function TrackScreen() {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const router = useRouter();
	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

	return (
		<ImageBackground
			source={require('@/assets/images/Map.png')}
			style={{ flex: 1 }}
		>
			<TouchableOpacity
				style={tw`absolute left-4 top-8 z-10`}
				onPress={() => {
					router.back();
				}}
			>
				<SvgXml xml={iconBack} width={34} height={34} />
			</TouchableOpacity>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<BackButton />
				<BottomSheet ref={bottomSheetRef}>
					<BottomSheetView style={tw`flex-1 items-center p-5 flex gap-5`}>
						<View style={tw`flex flex-row items-center justify-between w-full`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`pb-2`}>
									<Image
										source={require('@/assets/images/parrot.png')}
										style={tw`w-15 h-15 rounded-full border-4 border-white shadow-md`}
										contentFit="cover"
									/>
									<Text
										style={tw`text-black text-xs flex px-2 py-1 bg-white rounded-full absolute bottom-[-1] left-1/2 transform -translate-x-1/2 shadow-md`}
									>
										⭐ 4.5
									</Text>
								</View>
								<View>
									<Text style={tw`font-sfprobold text-sm`}>John Doe</Text>
									<Text style={tw`text-gray-600 text-xs`}>
										Toyota Camry | Blue
									</Text>
								</View>
							</View>
							<View style={tw`flex h-10 justify-end items-end`}>
								<Text style={tw`font-sfpromedium text-xs text-gray-700`}>
									Arrive in 3 mins
								</Text>
							</View>
						</View>
						<ChooseButton text="Pay Now" />
					</BottomSheetView>
				</BottomSheet>
			</GestureHandlerRootView>
		</ImageBackground>
	);
}
