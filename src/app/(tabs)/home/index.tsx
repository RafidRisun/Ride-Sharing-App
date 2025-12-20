import { iconBack } from '@/assets/icons';
import Header from '@/src/components/ui/header';
import ArrivingSheetView from '@/src/components/ui/sheetViews/arrivingSheetView';
import CancelRide from '@/src/components/ui/sheetViews/cancelRide';
import ChooseVehicleSheetView from '@/src/components/ui/sheetViews/chooseVehicleSheetView';
import ConfirmPickupLocationSheetView from '@/src/components/ui/sheetViews/confirmPickupLocationSheetView';
import FindingDriversSheetView from '@/src/components/ui/sheetViews/findingDriversSheetView';
import HomeBottomSheetView from '@/src/components/ui/sheetViews/homeBottomSheetView';
import PickDestinationSheetView from '@/src/components/ui/sheetViews/pickDestinationSheetView';
import TripDetails from '@/src/components/ui/sheetViews/tripDetails';
import tw from '@/src/lib/tailwind';
import { returnFromCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { RootState } from '@/src/state/store';
import { bothPlatform } from '@/src/utils/utils';
import { ImageBackground } from 'expo-image';
import React, { useEffect, useRef } from 'react';
import { Animated, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';

export default function Index() {
	const expanded = useSelector((state: RootState) => state.expand.expanded);
	const dispatch = useDispatch();
	const currentComponent = useSelector(
		(state: RootState) =>
			state.currentComponent[state.currentComponent.length - 1]
	);

	// Animated header slide values
	const HEADER_HIDE_OFFSET = 150; // pixels to slide header up when expanded — adjust if needed
	const headerTranslate = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(headerTranslate, {
			toValue: expanded ? -HEADER_HIDE_OFFSET : 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
	}, [expanded, headerTranslate]);

	return (
		<KeyboardAvoidingView
			behavior={bothPlatform === 'ios' ? 'padding' : 'height'}
			// keyboardVerticalOffset={80}
			style={{ flex: 1 }}
		>
			<GestureHandlerRootView
				style={tw`flex-1 bg-slate-500 flex items-center justify-start`}
			>
				{currentComponent !== 'planTrip' && (
					<TouchableOpacity
						style={tw`absolute left-4 top-4 z-10`}
						onPress={() => {
							dispatch(returnFromCurrentComponent());
						}}
					>
						<SvgXml xml={iconBack} width={34} height={34} />
					</TouchableOpacity>
				)}
				{currentComponent === 'planTrip' && (
					<Animated.View
						style={{
							transform: [{ translateY: headerTranslate }],
							opacity: headerTranslate.interpolate({
								inputRange: [-HEADER_HIDE_OFFSET, 0],
								outputRange: [0, 1],
							}),
							zIndex: 20,
							width: '100%',
						}}
					>
						<Header />
					</Animated.View>
				)}
				{/* Map Image for now */}
				<ImageBackground
					source={require('@/assets/images/Map.png')}
					style={tw`flex-1 w-full`}
					contentFit="cover"
				/>
				{currentComponent === 'planTrip' && <HomeBottomSheetView />}
				{currentComponent === 'pickDestination' && <PickDestinationSheetView />}
				{currentComponent === 'chooseVehicle' && <ChooseVehicleSheetView />}
				{currentComponent === 'confirmPickupLocation' && (
					<ConfirmPickupLocationSheetView />
				)}
				{currentComponent === 'findingDrivers' && <FindingDriversSheetView />}
				{currentComponent === 'arriving' && <ArrivingSheetView />}
				{currentComponent === 'tripDetails' && <TripDetails />}
				{currentComponent === 'cancelRide' && <CancelRide />}
			</GestureHandlerRootView>
		</KeyboardAvoidingView>
	);
}
